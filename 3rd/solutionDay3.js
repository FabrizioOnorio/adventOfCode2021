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
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i].charAt(n) === '0'){
      count0++
    } else {
      count1++
    }
  }
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
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i].charAt(0) === '0'){
      arrayOf0.push(array[i])
    } else {
      arrayOf1.push(array[i])
    }
  }
  if(arrayOf0.length > arrayOf1.length) {
    for(let i = 0; i < arrayOf0.length; i++){
      oxygenGeneratorRating.push(arrayOf0[i]);
    }
    for(let i = 0; i < arrayOf1.length; i++){
      co2ScraperRating.push(arrayOf1[i]);
    }
  } else if(arrayOf1.length > arrayOf0.length) {
      for(let i = 0; i < arrayOf1.length; i++){
        oxygenGeneratorRating.push(arrayOf1[i]);
      }
      for(let i = 0; i < arrayOf0.length; i++){
        co2ScraperRating.push(arrayOf0[i]);
      }
  } else {
      for(let i = 0; i < arrayOf1.length; i++){
        oxygenGeneratorRating.push(arrayOf1[i]);

      }
      for(let i = 0; i < arrayOf0.length; i++){
        co2ScraperRating.push(arrayOf0[i]);
      }
  }



  let n = 1;
while(oxygenGeneratorRating.length > 1 ) {

  arrayOf0 = [];
  arrayOf1 = [];
  for(let i = 0; i < oxygenGeneratorRating.length; i++) {
    if(oxygenGeneratorRating[i].charAt(n) === '0'){
      arrayOf0.push(oxygenGeneratorRating[i])
    } else {
      arrayOf1.push(oxygenGeneratorRating[i])
    }
  }

  oxygenGeneratorRating = [];


  if(arrayOf0.length > arrayOf1.length) {
    for(let i = 0; i < arrayOf0.length; i++){
      oxygenGeneratorRating.push(arrayOf0[i]);
    }
  } else if(arrayOf1.length > arrayOf0.length) {
      for(let i = 0; i < arrayOf1.length; i++){
        oxygenGeneratorRating.push(arrayOf1[i]);
      }
  } else {
      for(let i = 0; i < arrayOf1.length; i++){
        oxygenGeneratorRating.push(arrayOf1[i]);
      }
  }
  n++;
}

   n = 1;
while(co2ScraperRating.length > 1 ) {

  arrayOf0 = [];
  arrayOf1 = [];
  for(let i = 0; i < co2ScraperRating.length; i++) {
    if(co2ScraperRating[i].charAt(n) === '0'){
      arrayOf0.push(co2ScraperRating[i])
    } else {
      arrayOf1.push(co2ScraperRating[i])
    }
  }

  co2ScraperRating = [];


  if(arrayOf0.length < arrayOf1.length) {
    for(let i = 0; i < arrayOf0.length; i++){
      co2ScraperRating.push(arrayOf0[i]);
    }
  } else if(arrayOf1.length < arrayOf0.length) {
      for(let i = 0; i < arrayOf1.length; i++){
        co2ScraperRating.push(arrayOf1[i]);
      }
  } else {
      for(let i = 0; i < arrayOf0.length; i++){
        co2ScraperRating.push(arrayOf0[i]);
      }
  }
  n++;
}

// solution 2:
console.log(parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScraperRating, 2))
