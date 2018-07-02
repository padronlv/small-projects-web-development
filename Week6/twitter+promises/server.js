const express = require("express");
const app = express();
const {getToken, getTweets, filterTweets} = require("./modules");
const url1 = '/1.1/statuses/user_timeline.json?screen_name=el_pais&count=10?lang=es';
const url2 = '/1.1/statuses/user_timeline.json?screen_name=el_pais&count=10?lang=es';
const url3 = '/1.1/statuses/user_timeline.json?screen_name=el_pais&count=10?lang=es';

app.use(express.static('./public/ticker jQuery'));

app.get("/data.json", (req, res) => {
    getToken().then( token => {
        console.log("getToken is working");
        return Promise.all(
            getTweets(token),
            getTweets(token),
            getTweets(token)
        );
    })
        .then( arrayOfTweets => {
            // responses from the big array we got from
            // our Promise.all
            const el_pais = arrayOfTweets[0];
            const el_mundo = arrayOfTweets[1];
            const el_confidencial = arrayOfTweets[2];

            // take theonion, bbc, and nytimes arrays and
            // put them all in one big array using concat
            let mergedArrayOfTweets = el_pais.concat(el_mundo, el_confidencial);

            // sort through the tweets in reverse chronological order
            // mergedArrayOfTweets.sort(function(a, b) {
            //     return new Date(b.created_at) - new Date(a.created_at);
            // });
            res.json(filterTweets(mergedArrayOfTweets));


        })

        .catch(err => {
            console.log("error: ", err);
        });
});




app.listen(8080, () => console.log("listening on 8080"));
