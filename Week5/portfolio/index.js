const http = require("http");
const fs = require('fs');
const path = require('path');
const extension = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml"
};


const server = http.createServer((request, response) => {


    if(request.method != "GET") {

        response.statusCode = 405;
        return response.end();
    }



    let pathToMaybeFile = path.normalize(__dirname + '/projects' + request.url);
    // console.log(pathToMaybeFile, __dirname + '\\projects');

    if (!pathToMaybeFile.startsWith(__dirname + '\\projects')) {
        // console.log(!pathToMaybeFile.startsWith(__dirname + '/projects'));
        // console.log(pathToMaybeFile);
        console.log("someone is trying to look at your privat directories");
        response.statusCode = 403;
        return response.end();
    }
    if (request.url == "/" || "") {

        let projects = [];
        console.log("project directory");
        fs.readdir(__dirname + "/projects", (err, files) => {
            if (err) {
                console.log(err);
            }
            files.forEach(function(file){
                projects += `<a href = ${file}> ${file}</a>`;
                console.log(projects);
                // pathd = "/" + file;

            });
        });

        return response.end(`
            <!doctype html>
                <html>
                    ${projects}


                </html>
        `);
    }



    fs.stat(pathToMaybeFile, (err, stats) => {
        if (err) {
            console.log(err);
        } else {
            // console.log("yes there is a file!!!");
            if (stats.isDirectory()) {
                if (!request.url.endsWith('/')) {
                    console.log("it doesn't end with /");
                    response.setHeader("location", request.url + "/");
                    response.statusCode = 302;
                    return response.end();
                }
                response.setHeader('Content-Type', 'text/html');
                const readStream = fs.createReadStream(pathToMaybeFile + "index.html" );
                // console.log(extension[path.extname(request.url)]);
                readStream.pipe(response);
                readStream.on('error', function(err) {
                    console.log(err);
                    response.statusCode = 500;
                    response.end();
                });
            } else {
                response.setHeader('Content-Type', extension[path.extname(request.url)]);
                const readStream = fs.createReadStream(pathToMaybeFile);
                console.log(extension[path.extname(request.url)]);
                readStream.pipe(response);
                readStream.on('error', function(err) {
                    console.log(err);
                    response.statusCode = 500;
                    response.end();
                });
            }
        }
    });
});


server.listen(8080, () => console.log("listening on port 8080!"));
