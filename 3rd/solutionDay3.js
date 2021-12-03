const fs = require("fs");
const array = fs.readFileSync("./text.txt")
.toString()
.split("\n");

//Part 1:
let gammaRate = '';
let epsilonRate = '';

for(let n = 0; n < 12; n++) {
  let count0 = 0;
  let count1 = 0;
  array.forEach( element => {
    if(element.charAt(n) === '0'){
      count0++
    } else {
      count1++
    }
  });
  if (count0 > count1) {
    gammaRate += '0';
    epsilonRate += '1';
  } else {
    gammaRate += '1';
    epsilonRate += '0';
  }
}

let a = parseInt(gammaRate, 2);
let b = parseInt(epsilonRate, 2);
// Solution 1:
console.log(a*b);

// Part 2:
let oxygenGeneratorRating = [];
let co2ScraperRating = [];
let arrayOf0 = [];
let arrayOf1 = [];
array.forEach(element => {
  if(element.charAt(0) === '0'){
    arrayOf0.push(element)
  } else {
    arrayOf1.push(element)
  }
});
if(arrayOf0.length > arrayOf1.length) {
  arrayOf0.forEach(element => { oxygenGeneratorRating.push(element) });
  arrayOf1.forEach(element => { co2ScraperRating.push(element) });
} else if(arrayOf1.length > arrayOf0.length) {
    arrayOf1.forEach(element => { oxygenGeneratorRating.push(element) });
    arrayOf0.forEach(element => { co2ScraperRating.push(element) });
} else {
    arrayOf1.forEach(element => { oxygenGeneratorRating.push(element) });
    arrayOf0.forEach(element => { co2ScraperRating.push(element) });
}

let n = 1;
while(oxygenGeneratorRating.length > 1 ) {
  arrayOf0 = [];
  arrayOf1 = [];
  oxygenGeneratorRating.forEach( element => {
    if(element.charAt(n) === '0'){
      arrayOf0.push(element)
    } else {
      arrayOf1.push(element)
    }
  });

  oxygenGeneratorRating = [];

  if(arrayOf0.length > arrayOf1.length) {
    arrayOf0.forEach( element => { oxygenGeneratorRating.push(element) });
  } else if(arrayOf1.length > arrayOf0.length) {
      arrayOf1.forEach( element => { oxygenGeneratorRating.push(element) });
  } else {
      arrayOf1.forEach( element => { oxygenGeneratorRating.push(element) });
  }
  n++;
}

n = 1;
while(co2ScraperRating.length > 1 ) {
  arrayOf0 = [];
  arrayOf1 = [];
  co2ScraperRating.forEach( element => {
    if(element.charAt(n) === '0'){
      arrayOf0.push(element)
    } else {
      arrayOf1.push(element)
    }
  });

  co2ScraperRating = [];

  if(arrayOf0.length < arrayOf1.length) {
    arrayOf0.forEach( element => { co2ScraperRating.push(element) });
  } else if(arrayOf1.length < arrayOf0.length) {
      arrayOf1.forEach( element => { co2ScraperRating.push(element) });
  } else {
      arrayOf0.forEach( element => { co2ScraperRating.push(element) });
  }
  n++;
}
// solution 2:
console.log(parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScraperRating, 2))
