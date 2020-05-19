const fs = require('fs');
const path = require('path');

function moveSingleFile(file, folderFrom, folderTo) {
    fs.rename(path.join(folderFrom, file), path.join(folderTo, file), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log(`File ${file} was moved from ${folderFrom} to ${folderTo}`);
    });
}

function moveAllFiles(folderFrom, folderTo) {
    fs.readdir(folderFrom, (err, files) => {
        if (err) {
            return console.log(err);
        }
        console.log('Directory: ', folderFrom);
        console.log('Default list of files: ', files);
        console.log('********************************');
        files.forEach(file => moveSingleFile(file, folderFrom, folderTo))
    })
}

module.exports = moveAllFiles;
