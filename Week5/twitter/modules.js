const https = require('https');
const {consumerKey, consumerSecret} = require ("./secrets");


module.exports.getToken = function getTocken(callback) {


    let options = {
        method: "POST",
        host: 'api.twitter.com',
        path: '',
        headers:{
            Authorization: "Basic " + new Buffer(consumerKey + ":" + consumerSecret).toString("base64");


        }
    };

    let cb = function(response) {
        var str = '';
        if ( resp.statusCode != 200 {
            callback(resp.statusCode)
        })

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            console.log(str);
            // bearerToken = something
            callback(bearerToken)
        });
    };

    https.request(options, cb).end();
    //if we need to send body with req -- do that there
    req.write()

    //send response
    req.end
};

module.esports.getTweets = function getTweets(bearerToken, callback) {

}
