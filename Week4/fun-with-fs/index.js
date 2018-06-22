const fs = require('fs');
var dir = "";


function read(wd) {
    fs.readdir(__dirname + "/files" + wd, (err, files) => {
        if (err) {
            console.log(err);
        }
        console.log(__dirname + "/files" + wd, "contains ", files);

        files.forEach(function(file){
            // pathd = "/" + file;
            fs.stat(__dirname + "/files" + wd + "/" + file, (err,stat) => {
                if (err) console.log(err);
                if (stat.isDirectory()) {
                    read(wd + "/" + file);
                }
            });
        });
    });
}
read(dir);
