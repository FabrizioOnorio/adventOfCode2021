const fs = require("fs");
const input = fs.readFileSync("./text.txt")
.toString()
.split("\n")
.map(x => x.split(","))
.splice(0, 1)
.flat()
.map(x => parseInt(x, 10))
.sort(function(a, b) { return a - b; });


function part1(array) {

}
//console.log(part1(input))

function part2(array) {

}
//console.log(part2(input))
