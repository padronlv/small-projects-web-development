const fs = require('fs');

module.exports.readdir = function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                // if your function can throw an error,
                // we need to reject that error when promisifying the function
                reject(err);
            } else {
                // resolve means "the async process worked, and I got the result I wanted!"
                resolve(files);
            }
        });
    });
};

module.exports.stat = function stats(path, file) {
    return new Promise((resolve, reject) => {
        fs.stat(path + file, (err,stat) => {
            if (err) {
                reject(err);
            } else {
                resolve(stat.isDirectory());
            }
        });
    });
};
