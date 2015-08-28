//This file preprocessed by gulp-preprocess. Only the variable where the if statement evaluates to true remains

// @if ENV='local'
var Global = {
    env: 'local',
    host: 'http://localhost:8001/',
    fbID: '',
    debug: true,
    api: ''
};
// @endif


// @if ENV='dev'
var Global = {
    env: 'dev',
    host: '',
    fbID: '',
    debug: true,
    api: ''
};
// @endif
// @if ENV='test'
var Global = {
    env: 'test',
    host: '',
    fbID: '',
    debug: false,
    api: ''
};
// @endif
// @if ENV='prod'
var Global = {
    env: 'prod',
    host: '',
    fbID: '',
    debug: false,
    api: ''
};
// @endif

module.exports = Global