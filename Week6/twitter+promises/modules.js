const https = require('https');
const { consumerKey, consumerSecret } = require('./secrets');
const { promisify } = require('util');


module.exports.getToken = function getToken() {
    return new Promise ((resolve, reject) => {
        let options = {
            method: "POST",
            host: 'api.twitter.com',
            path: '/oauth2/token',
            json: true,
            headers: {
                'Authorization': "Basic " + new Buffer(consumerKey + ":" + consumerSecret).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        };

        let cb = function(response) {
            let str = '';

            if (response.statusCode != 200) {
                reject(response.statusCode);
            }

            // another chunk of data has been recieved, so append it to `str`
            response.on('data', function(chunk) {
                str += chunk;
            });

            // the whole response has been recieved, so we just print it out here
            response.on('end', function() {

                // if things go well, this console log should
                // be a json object that has bearer token in it!
                // console.log(str);

                let bearerToken = JSON.parse(str);
                bearerToken = bearerToken.access_token;

                console.log(bearerToken);
                resolve(bearerToken);

            });
        };

        // we defined options & cb up above
        // once defined, we pass them to request method of https
        const req = https.request(options, cb);

        // if we need to send body with req -- do that here
        req.write("grant_type=client_credentials");

        // send HTTPS request
        req.end();




    });

    // read the twitter documentation to finish writing up options
    // https://developer.twitter.com/en/docs/basics/authentication/overview/application-only

};




module.exports.getTweets = function getTweets(bearerToken, urlSource) {
    return new Promise ((resolve, reject) => {
        let options = {
            method: "GET",
            host: 'api.twitter.com',
            path: urlSource,
            headers: {
                "Authorization": "Bearer " + bearerToken
            }
        };

        let cb = function(response) {
            let str = '';

            if (response.statusCode != 200) {
                reject(response.statusCode);
            }

            // another chunk of data has been recieved, so append it to `str`
            response.on('data', function(chunk) {
                str += chunk;
            });

            // the whole response has been recieved, so we just print it out here
            response.on('end', function() {

                // if things go well, this console log should
                // be a json object that has bearer token in it!

                let tweetsObject = JSON.parse(str);
                resolve(tweetsObject);

            });
        };

        // we defined options & cb up above
        // once defined, we pass them to request method of https
        const req = https.request(options, cb);

        // send HTTPS request
        req.end();

    });
};




module.exports.filterTweets = function filterTweets(arr) {
    let newObj = {};

    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]['entities']['urls']);
        if (arr[i]['entities']["urls"].length == 1) {
            var resul = arr[i]["text"].split(" ");
            // console.log(resul);
            var newResul = resul.filter(function(item){
                return ! item.startsWith('http');
            });
            var toPush = newResul.join(" ");
            newObj[toPush] = arr[i]['entities']["urls"][0]["url"];
        }
    }
    return newObj;
};
