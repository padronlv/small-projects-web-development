const http = require("http");
const fs = require('fs');


const server = http.createServer((request, response) => {

    // LOGGING REQUEST HEADERS, URL, AND METHOD
    // console.log("request headers: ", request.headers);
    // console.log("request url: ", request.url);
    // console.log("request method: ", request.method);

    request.on("error", (err) => {
        console.log("error in request ", err);
    });
    response.on ("error", (err) => {
        console.log("error in response ", err);
    });

    if(request.method == "GET") {

        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        response.setHeader("x-powered-by", "GET");
        response.end(`
            <!doctype html>
            <html>
            <title>Hello World!</title>
            <p>Hello World!
            </html>
        `);
    } else if (request.method == "HEAD") {
        response.setHeader("x-powered-by", "HEAD");
        response.end();

    } else if (request.method == "POST" ) {

        let body = '';

        request.on('data', chunk => {
            console.log("chunk of data: ", chunk);
            body += chunk;
        });

        request.on('end', () => {
            console.log("finished chunking. here's our body: ", body);
            response.setHeader("content-type", "text/html");
            response.setHeader("location", "/");
            response.statusCode = 302;
            response.setHeader('x-powered-by', 'chunks');
            response.end();
        });

    } else {
        response.status = 405;
    }
    fs.appendFile('requests.txt', `${Date.now()}\t${request.method}\t${request.url}\t${JSON.stringify(request.headers['user-agent'])}\n`, 'utf8', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');

    });
});


server.listen(8080, () => console.log("listening on port 8080!"));
