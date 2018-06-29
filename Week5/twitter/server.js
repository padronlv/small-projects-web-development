const express = require("express");
const app = express();
const getToken = require("./modules").getTocken;
const getTweets = require("./modules").getTweets;

app.use(express.static('./public/ticker jQuery'));


app.get("/data.json"), (req, res) => {
    getToken(function (token) {
        console.log("TOKEN ", token)
        getTweets();
};









app.listen(8080, () => console.log("listening on 8080"));
