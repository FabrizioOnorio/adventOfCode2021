const fs = require("fs");
const mesuresArray = fs.readFileSync("./mesures.txt").toString().split("\n").map(x => parseInt(x));
let count = 0;

// first part of day 1:
for(let i = 1; i < mesuresArray.length; i++){
    if(mesuresArray[i - 1] < mesuresArray[i]){
      count++
    }
}
// solution 1:
console.log(count);

// second part of day 2:
let averageOfThreeArray = [];

for(let i = 0; i < mesuresArray.length - 2; i++){
  averageOfThreeArray.push(mesuresArray[i] + mesuresArray[i + 1] + mesuresArray[i + 2])
}

let newCount = 0;

for(let i = 1; i < averageOfThreeArray.length; i++){
    if(averageOfThreeArray[i - 1] < averageOfThreeArray[i]){
      newCount++
    }
}
// solution 2:
console.log(newCount);
