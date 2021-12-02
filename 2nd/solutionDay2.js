const fs = require("fs");
const directionsArray = fs.readFileSync("./directions.txt")
.toString()
.split("\n")
.map(x => x.split(" "))
.map(array => [array[0], parseInt(array[1])]);

// Day 2 part 1:
let depth = 0;
let horizontal = 0;

for(let i = 0; i < directionsArray.length; i++){
  if(directionsArray[i][0] === 'forward'){
    horizontal += directionsArray[i][1]
  } else if(directionsArray[i][0] === 'down'){
    depth += directionsArray[i][1]
  } else if(directionsArray[i][0] === 'up'){
    depth -= directionsArray[i][1]
  }
}
// Solution 1:
console.log(depth * horizontal)

// Day 2 part 2
let aim = 0;
let horizontal2 = 0;
let depth2 = 0;

for(let i = 0; i < directionsArray.length; i++){
  if(directionsArray[i][0] === 'down') {
    aim += directionsArray[i][1]
  } else if(directionsArray[i][0] === 'up') {
    aim -= directionsArray[i][1]
  } else if(directionsArray[i][0] === 'forward') {
    horizontal2 += directionsArray[i][1]
    depth2 += aim * directionsArray[i][1]
  }
}
// Solution 2:
console.log(depth2 * horizontal2)
