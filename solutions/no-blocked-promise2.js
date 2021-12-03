const fs = require("fs");

//Exercise with promise

const readfile  = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename,  (err, data) => {       
            if (err) reject(new Error(err));
            resolve(data.toString());
        });
    })
};

readfile('input.txt','utf-8')
.then(data => console.log(data))
.catch(err => console.log(err));

 

console.log("Program Ended");
