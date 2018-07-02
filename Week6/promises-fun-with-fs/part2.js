const fs = require('fs');




function read(wd) {
    let readdirSync = fs.readdirSync(wd);
    // console.log(__dirname + "/files" + wd, "contains ", readdirSync);
    var objSize = {};
    readdirSync.forEach(function(file) {
        let statSync = fs.statSync(wd + "/" + file);
        if (statSync.isDirectory()) {
            objSize[file] = read(wd + "/" + file);
        } else {
            objSize[file] = statSync.size;
        }
    });
    return objSize;
}

const result = read(__dirname + "/files");

console.log(result);
const resultJson = JSON.stringify(result, null, 4);



fs.writeFile('files.json', resultJson , (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
