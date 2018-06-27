const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const secrets = require ('./secrets.json');
var basicAuth = require('basic-auth');


app.use("/Reichstag", function(req, res, next) {
    const creds = basicAuth(req);
    if (!creds ||
        creds.name != secrets.basicAuthUser ||
        creds.pass != secrets.basicAuthPass) {
        res.setHeader(
            'WWW-Authenticate',
            'Basic realm="Enter your credentials to see this stuff."');
        res.sendStatus(401);
        // res.status(401).send("");
    } else {
        next();
    }
});

app.use("/favicon.ico", function (req, res) {
    return res.sendStatus(204);
});
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(function(req, res, next){
    if (!req.cookies.accepted && req.url != "/cookie") {
        // if (!req.cookies.url) {
        res.cookie('url', req.url);
        // }
        // else {
        //     console.log(req.url, req.headers.referer)
        // }
        return res.redirect('/cookie');
    } else {
        next();
    }
});

app.use(express.static(__dirname + '/projects'));

app.get("/cookie", function(req, res) {
    return res.send(`
        <!doctype html>
        <title>Accept our cookies</title>
        <p>Please accept our cookies</p>
        <form method="POST">
            <input name="accept" type="checkbox">
            <button>submit</button>
        </form>
    `);
});

app.post('/cookie', function (req, res) {
    console.log(req.body);
    if(!req.body.accept) {
        return res.send(`
        <!doctype html>
        <title>Buh</title>
        <h1>you are not allowed</h1>

        `);

    } else {
        res.cookie("accepted", "yes");
        return res.redirect(req.cookies.url);
    }
});


app.listen(8080, () => console.log ('I am listening.'));

// app.use(function(req, res, next){
//     if (!req.cookes.cookiesok && req.url != '/cookie') {
//         res.cookie('url', req.url)
//         res.redirect('/cookie')
//     } else {
//         next();
//     }
// })
//
//
// app.use(
//     express.static(__dirname + '/public')
// );
//
// app.use(function(req, res, next) {
//     console.log('middleware says that the url is ' + req.url);
//     next();
// });
//
//
// app.get('/', function (req, res) {
//     console.log(req.url);
//     res.send(`<!doctype html>
//         <title>yo</title>
//         <h1>jdkal</h1>
//     `);
//
// });
//
// app.get('/funky/chicken', function (req, res) {
//     if (req.cookies.funky == 'chicken') {
//         next();
//     }
//     console.log(req.url);
//     res.json({
//         chicken:'funcky',
//         hello: 'kitty'
//     });
// });
// app.get('/hello/:name', function (req, res, next) {
//     if (req.params.name == "World") {
//         return next;
//     }
//     if(req.params.name == "funkychicken") {
//         return res.redirect('/funky/chicken');
//     }
//     if(req.params.name == 'leonardo') {
//         return res.sendStatus(200);
//     }
//     res.json({
//         hello: req.params.name
//     });
// });
//
// app.get('/hello', function (req, res) {
//     res.cookie('funky', 'chicken');
//     console.log(req.headers);
//     console.log(req.query);
//     if (req.query.funky == 'chicken') {
//         return res.sendFile(__dirname + 'spiced.jpg');
//     }
//     console.log(req.url);
//     res.sendFile(__dirname + '/djkaöljf.gif');
//
// });
//
// app.get('*', function (req,res) {
//     res.send(`
//
//
//     `);
//
// });
//
// app.get('/goodbye/:whoever/whatever', function (req,res) {
//     res.send('later' + req.params.whoever);
//
// });
//
// app.get('*', function (req,res) {
//     res.send(`
//
//
//     `);
//
// });
//
// app.post ('/hello', function (req, res) {
//     console.log(req.body);
//     res.json ({
//         success: true
//     });
// });
//
//
