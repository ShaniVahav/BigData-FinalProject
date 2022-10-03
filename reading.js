var file = 'cities.txt';
const fs = require('fs');
fs.readFile('cities.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    var fileArray = data.split(/\r\n|\n/);
    console.log(fileArray[0]);
})