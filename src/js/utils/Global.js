//DEVELOPMENT vs PRODUCTION defined in webpack configs, takes from process.env.DEVELOPMENT and process.env.PRODUCTION
var Global = {};

if (DEVELOPMENT){
    Global.host = 'http://localhost:4000/api'
}

if (PRODUCTION){
    //TODO: use correct url
    Global.host = 'http://someurl.com'
}

export default Global