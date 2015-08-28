/*
 * sl-site-frontend
 *
 * @description     Gulp file for build and development
 * @file            gulpfile.js
 * @author          Tchow
 *
 */

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    runSequence = require('run-sequence'),
    argv = require('yargs').argv,
    opn = require('opn'),
    del = require('del'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    preprocessify = require('preprocessify'),
    rename = require('gulp-rename'),
    jsonminify = require('gulp-jsonminify'),
    watchify = require('watchify')
    babelify = require('babelify');
    // reactify = require('reactify');

argv.env = argv.env ? argv.env : 'local';
var crushAssets = !!(argv.env == 'test' || argv.env == 'prod' );
watchify.args.debug = crushAssets;

gulp.task('clean',function(cb){
    return del(["bin/" + argv.env+"/**"], cb);
});

gulp.task('compileStylus',function(){
    return gulp.src('src/**/*.styl')
        .pipe(plumber())
        .pipe(stylus({compress:true}))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest("bin/" + argv.env +"/css"))
        .pipe(livereload());
});

gulp.task('compileJade',function(){
    return gulp.src('src/*.jade')
        .pipe(plumber())
        .pipe(jade())
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest("bin/" + argv.env +"/"))
        .pipe(livereload());
});

gulp.task('copyAssets',function(){
    gulp.src('src/**/*.{png,jpg,jpeg,gif}')
        .pipe(rename(function(path){
           path.dirname = path.dirname.replace("images","");
        }))
        .pipe(gulp.dest("bin/" + argv.env +"/images"))
        .pipe(livereload());
    gulp.src('src/**/*.json')
        .pipe(rename(function(path){
           path.dirname = path.dirname.replace("json","").replace("data","");
        }))
        .pipe(gulpif(crushAssets,jsonminify()))
        .pipe(gulp.dest("bin/" + argv.env+"/data"))
    return gulp.src('src/**/*.{otf,ttf,eot,woff}')
        .pipe(gulp.dest("bin/" + argv.env+'/fonts'))
        .pipe(livereload())
});

gulp.task('js',function(){
    // set up the browserify instance
    var b = browserify({
        entries: 'src/js/app.js',
        debug: crushAssets,
        cache: {},
        packageCache: {},
        fullPaths: true,
        paths: ['./node_modules','./src/js/']
    })
    var w = watchify(b);
    w.transform(preprocessify({ENV:argv.env})).transform(babelify.configure({
        sourceMapRelative: 'src/js'
    }))

    //on updates to watchify, re execute bundle
    w.on('update', rebundle);
    w.on('log', gutil.log);

    function rebundle(){
        return w.bundle()
        .on('error',function(err){
            console.log(err.message)
            this.emit('end');
        })
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // .pipe(uglify({compress:{drop_console:crushAssets}}))
        //     .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest("bin/" + argv.env + "/js"));   
    }

    return rebundle();
})

gulp.task('watchForChanges',function(){
    livereload.listen();
    gulp.watch('src/**/*.styl',['compileStylus']);
    gulp.watch('src/**/*.jade',['compileJade']);
    gulp.watch('src/**/*.{png,jpeg,jpg,gif,woff,ttf,otf,eot,json}',['copyAssets']);
});

gulp.task('webserver',function(){
    gulp.src('bin/local')
        .pipe(webserver({
            host:'0.0.0.0',
            port:'8001'
        }));
});
gulp.task('openBrowser',function(){
    opn("http://localhost:8001");
});

//** Build commands**/

// - build css, html, js files and minify js
gulp.task('build', function() { runSequence("clean","compileStylus", "compileJade","copyAssets"); });
// live reload development
gulp.task('watch', ["webserver","watchForChanges","openBrowser","js"]);