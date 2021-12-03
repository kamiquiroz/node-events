const fs = require("fs");
const util = require("util");

//Exercise with promisify

const readFile = util.promisify(fs.readFile);

readFile('input.txt','utf-8')
.then( data => {console.log(data);})
.catch(err => console.log(err));


console.log("Program Ended");
