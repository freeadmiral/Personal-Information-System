const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // allow requests from any other server
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // allow these verbs
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
}

module.exports = allowCrossDomain;