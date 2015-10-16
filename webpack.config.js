var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache:true,
    entry: "./src/root.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    },
    resolve: {
        root: path.resolve('./src/'),
        extensions: ['', '.js','.styl','.jade']
    },
    plugins:[
        new webpack.DefinePlugin({
            DEVELOPMENT: JSON.stringify(JSON.parse(process.env.DEVELOPMENT || 'true')),
            PRODUCTION: JSON.stringify(JSON.parse(process.env.PRODUCTION || 'false'))
        })
    ],
    debug:JSON.parse(process.env.DEVELOPMENT || true),
    devtool:(process.env.PRODUCTION ? "eval" : "source-map"),
};