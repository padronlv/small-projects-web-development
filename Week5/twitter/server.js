const express = require("express");
const app = express();
const {getToken, getTweets, filterTweets} = require("./modules");


app.use(express.static('./public/ticker jQuery'));


app.get("/data.json", (req, res) => {
    getToken(function(err, token) {
        if (err) {
            console.log(err);
            return;
        }

        getTweets(token, function(err, tweets){
            if(err){
                console.log(err);
                return;
            }
            // console.log(tweets);
            res.json(filterTweets(tweets));
        });
    });
});




app.listen(8080, () => console.log("listening on 8080"));
