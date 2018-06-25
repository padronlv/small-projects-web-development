const http = require("http");
const chalk = require("chalk");
const queryString = require('querystring');


const server = http.createServer((request, response) => {

    request.on("error", (err) => {
        console.log("error in request ", err);
    });
    response.on ("error", (err) => {
        console.log("error in response ", err);
    });

    if (request.method == "GET")  {
        response.end(`
            <!doctype html>
            <html>
            <title>Colors</title>
            <form method="POST">
            <input type="text" name="text">
            <select name="color">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="gray">gray</option>
            <option value="magenta">magenta</option>
            <option value="cyan">cyan</option>
            </select>
            <button type="submit">Go</button>
            </form>
            </html>
        `);
    }
    if (request.method == "POST")  {
        console.log(chalk.magenta("POOOSSTTT"));
        let body = '';

        request.on('data', chunk => {
            body += chunk;
        });

        request.on('end', () => {
            console.log("finished chunking. here's our body: ", body);
            const parsed = queryString.parse(body);
            console.log(parsed);

            response.end(`
                <!doctype html>
                    <html>
                        <title>${parsed.text}</title>
                        <a href="/" style="color:${parsed.color}">${parsed.text}</a>
                    </html>
            `);
        });        
    }

});


server.listen(8080, () => console.log("listening on port 8080!"));
