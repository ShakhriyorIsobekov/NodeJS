const path = require("path");

//basename
console.log(path.basename(__filename));
// dirname
console.log(path.dirname(__filename));
// extname
console.log(path.extname(__filename));
// parse
console.log(path.parse(__filename));
// join
console.log(path.join(__dirname, "templates", "index.js"));
//resolve
console.log(path.resolve(__dirname, "templates"));
