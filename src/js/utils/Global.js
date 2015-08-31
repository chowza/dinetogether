//DEVELOPMENT vs PRODUCTION defined in webpack configs, takes from process.env.DEVELOPMENT and process.env.PRODUCTION
var Global = {};

if (DEVELOPMENT){
    Global.host = 'http://localhost:8080/src'
}

if (PRODUCTION){
    //TODO: use correct url
    Global.host = 'http://someurl.com'
}

export default Global