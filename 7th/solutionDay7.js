const fs = require("fs");
const mesures = fs.readFileSync("./text.txt")
.toString()
.split("\n")
.map(x => x.split(","))
.splice(0, 1)
.flat()
.map(x => parseInt(x, 10))
.sort(function(a, b) { return a - b; });

// Part 1:
let arrayResults = [];
let arrayTotals = [];
for(let i = mesures[0]; i <= mesures[mesures.length - 1]; i++) {
  for(let j = 0; j < mesures.length; j++) {
    if(i > mesures[j]) {
      arrayResults.push(i - mesures[j])
    } else {
      arrayResults.push(mesures[j] - i)
    }
  }
  let totalFuel = arrayResults.reduce((a, b) => a + b, 0)
  arrayTotals.push(totalFuel)
  arrayTotals.sort(function(a, b) { return a - b; })
  arrayResults = []
}
// Solution 1:
console.log(arrayTotals[0])

//Part 2:
let arrayResults2 = [];
let arrayTotals2 = [];

function calculateFuel(number) {
  let result = 0;
  for(let i = 0; i < number + 1; i++) {
    result += i
  }
  return result
}

for(let i = mesures[0]; i <= mesures[mesures.length - 1]; i++) {
  for(let j = 0; j < mesures.length; j++) {
    let distance
    if(i > mesures[j]) {
      distance = calculateFuel(i - mesures[j])
      arrayResults2.push(distance)
    } else {
      distance = calculateFuel(mesures[j] - i)
      arrayResults2.push(distance)
    }
  }
  let totalFuel2 = arrayResults2.reduce((a, b) => a + b, 0)
  arrayTotals2.push(totalFuel2)
  arrayTotals2.sort(function(a, b) { return a - b; })
  arrayResults2 = []
}
// Solution 2:
console.log(arrayTotals2[0])
