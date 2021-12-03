const fs = require("fs");
//Require npm install
//Exercise without callbacks

//Read file sequentialy
var data = fs.readFileSync("./input.txt");

console.log(data.toString());

console.log("Program Ended");