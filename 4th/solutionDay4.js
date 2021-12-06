const fs = require("fs");
const randomNumbers = fs.readFileSync("./text.txt")
.toString()
.split("\n")[0]
.split(",")
.map(x => parseInt(x, 10))

const arrayOfCards = fs.readFileSync("./text.txt")
.toString()
.split("\n")
.filter(n => n)
.map( x => x.split(" "))
.map( x => x.filter( n => n))
.map( x => x.map( j => {
  return {value:parseInt(j, 10), isMarked: false}
  }));
let firstElement = arrayOfCards.shift();
let n = 1;
let newArrayOfCards = [];
while (arrayOfCards.length > 0) {
  newArrayOfCards.push(arrayOfCards.splice(0,5))
  n++
}

// First Part
function checkWinning(card) {
  let result = false;
  card.forEach(row => {
    if(row.every(number => number.isMarked)){
      result = true;
    }
  })
  for(let i = 0; i < 5; i++){
    let column = card.map( row =>  row[i])
    if(column.every(number => number.isMarked)){
      result = true;
    }
  }
  return result
}

let winningNumber
let winningCard
randomNumbers.forEach( randomNumber => {
    if(!winningNumber)
      {
        newArrayOfCards.forEach( (card) => {
        card.forEach( (line) => {
          line.forEach( (number) => {
            if(number.value === randomNumber) {
              number.isMarked = true;
            }
          })
        })
        if(checkWinning(card)){
          winningNumber = randomNumber
          winningCard = card
        }
      })}
});

let total = winningCard.flat().filter( number => !number.isMarked ).reduce( (acc, number) => {
  return acc + number.value
}, 0)

// Part 2
const arrayOfCards2 = fs.readFileSync("./text.txt")
.toString()
.split("\n")
.filter(n => n)
.map( x => x.split(" "))
.map( x => x.filter( n => n))
.map( x => x.map( j => {
  return {value:parseInt(j, 10), isMarked: false}
  }));
let firstElement2 = arrayOfCards2.shift();
let j = 1;
let newArrayOfCards2 = [];
while (arrayOfCards2.length > 0) {
  newArrayOfCards2.push(arrayOfCards2.splice(0,5))
  j++
}

let winningNumber2
let winningCard2
randomNumbers.forEach( randomNumber => {

  newArrayOfCards2.filter(card => !checkWinning(card)).forEach( (card) => {
    card.forEach( (line) => {
      line.forEach( (number) => {
        if(number.value === randomNumber) {
          number.isMarked = true;
        }
      })
    })
  if(checkWinning(card)){
    console.log({randomNumber})
    winningNumber2 = randomNumber
    winningCard2 = card
  }
  })
});

let total2 = winningCard2.flat().filter( number => !number.isMarked ).reduce( (acc, number) => {
  return acc + number.value
}, 0)
console.log(winningNumber2 * total2)
