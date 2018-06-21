const url = require ('url');
const querystring = require('querystring');

const parsed = url.parse(process.argv[2]);
const query = querystring.parse(parsed.query);


console.log(parsed);
// for (var p in parsed) {
//     console.log('The ' + p + ' is ' + parsed[p]);
// }
for (var p in query) {
    console.log('The value of' + p + ' is ' + query[p]);
}
