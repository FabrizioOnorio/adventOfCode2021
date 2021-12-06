const fs = require("fs");
const fish = fs.readFileSync("./text.txt")
.toString()
.split(",")

let fishNumbers = fish.map(x => parseInt(x, 10));

//Part 1:
let newGeneration = [];
newGeneration.push(fishNumbers)
for(let i = 1; newGeneration.length < 81 ; i++){
  let newDay = [];
  newGeneration[i - 1].forEach( element => {
      if(element > 0) {
        newDay.push(element - 1)
      } else if(element === 0) {
        newDay.push( element = 6) && newDay.push( element = 8)
      }
  })
  newGeneration.push(newDay)
}
// Solution 1:
console.log(newGeneration[80].length)

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

//initial state
let fish0 = countOccurrences(fishNumbers, 0)
let fish1 = countOccurrences(fishNumbers, 1)
let fish2 = countOccurrences(fishNumbers, 2)
let fish3 = countOccurrences(fishNumbers, 3)
let fish4 = countOccurrences(fishNumbers, 4)
let fish5 = countOccurrences(fishNumbers, 5)
let fish6 = countOccurrences(fishNumbers, 6)
let fish7 = countOccurrences(fishNumbers, 7)
let fish8 = countOccurrences(fishNumbers, 8)
let arrayOfCounting = [fish0, fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8]
// next state
for( let i = 1; i < 257; i++){
  fish0 = fish1
  fish1 = fish2
  fish2 = fish3
  fish3 = fish4
  fish4 = fish5
  fish5 = fish6
  fish6 = arrayOfCounting[7] + arrayOfCounting[0]
  fish7 = fish8
  fish8 = arrayOfCounting[0]

  arrayOfCounting = []

  arrayOfCounting = [fish0, fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8]

  let totalFish = arrayOfCounting.reduce((a, b) => a + b, 0)

  console.log(totalFish)
}
