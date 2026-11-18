const fs = require('fs');
fs.writeFileSync("welcome.txt", "hello node");
fs.readFile("welcome.txt", "utf-8", (err, data) => { console.log(data) });