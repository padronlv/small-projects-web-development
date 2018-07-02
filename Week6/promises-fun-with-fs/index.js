
var dir = "";
const {readdir, stat} = require("./modules");


function read(wd) {
    return readdir(__dirname + "/files" + wd)

    // the value we RESOLVE will be captured in "then"
    // we NEED then if we want to see and work with the values we resolve!
        .then(filesFromReaddir => {
            return Promise.all(
                filesFromReaddir.map(function(file) {
                    return stat(__dirname + "/files" + wd + "/", file)
                        .then(isDirectory => {
                            if (isDirectory) {
                                console.log(__dirname + "/files" + wd + "/" + file + " is a Directory");
                                return read(wd + "/" + file);
                            } else {
                                console.log(__dirname + "/files" + wd + "/" + file + " is not a Directory");
                            }
                        })
                        .catch(err => {
                            console.log("error: ", err);
                        });
                })
            );

        })

    // the value we REJECT will be captured in "catch"
        .catch(err => {
            console.log("error: ", err);
        });
}
read(dir)
    .then(function() {
        console.log("Done!");
    })
    .catch(err => {
        console.log("promise all rejected!!!", err);
    });

// will run if all promises resolve
