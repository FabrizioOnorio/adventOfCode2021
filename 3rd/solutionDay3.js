const fs = require("fs");
const directionsArray = fs.readFileSync("./text.txt")
.toString()
.split("\n")
.map(x => x.split(" "))
.map(array => [array[0], parseInt(array[1])]);
