const express = require("express");
const app = express();
const hb = require("express-handlebars");

app.use(express.static("public"));

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home", { layout: "main" }); //only for templates
});

app.listen(8080, () => {
    console.log("listening on port 8080");
});
