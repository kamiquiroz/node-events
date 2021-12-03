const fs = require("fs");
const util = require("util");

//Exercise with promise

const readFile = util.promisify(fs.readFile);

(async () => {
    try {
        const content = await readFile('input.txt','utf-8');
        console.log(content);
    } catch (err) {clear
        console.error(eror);
    }
})();


console.log("Program Ended");
