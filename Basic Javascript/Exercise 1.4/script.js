const fs = require('fs');
const JSONToFile = (obj, filename) =>
    fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('The file has been written successfully');
        }
    });

JSONToFile({ test: 'is passed' }, 'testJsonFile');