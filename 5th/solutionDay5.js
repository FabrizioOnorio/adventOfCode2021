const fs = require("fs");
const pointsArray = fs.readFileSync("./text.txt")
.toString()
.split("\n")
.map( element => element.split(" -> ") )
.map( array => array.map( x => (x.split(",")).map(Number) ))

function part1(array) {
  const matrixPoint = {}

  for(let i = 0; i < pointsArray.length -1; i++) {
    const [x1, x2] = [pointsArray[i][0][0], pointsArray[i][1][0]].sort((a,b) => a - b)
    const [y1, y2] = [pointsArray[i][0][1], pointsArray[i][1][1]].sort((a,b) => a - b)
    if(x1 === x2) {
      //vertical
      for(let j = y1; j <= y2; j++) {
        matrixPoint[`${x1},${j}`] ? matrixPoint[`${x1},${j}`] += 1 : matrixPoint[`${x1},${j}`] = 1
      }
    } else if(y1 === y2) {
      //orizontal
      for(let z = x1; z <= x2; z++) {
        matrixPoint[`${z},${y1}`] ? matrixPoint[`${z},${y1}`] += 1 :matrixPoint[`${z},${y1}`] = 1
      }
    }
  }

  const total = Object.values(matrixPoint).filter(x => x > 1 ).length
  console.log(total)
}
part1(pointsArray)

// Part 2:
function part2(array) {
  const table = {}

  for(let i = 0; i < pointsArray.length -1; i++) {
    let [x1, x2] = [pointsArray[i][0][0], pointsArray[i][1][0]].sort((a,b) => a - b)
    let [y1, y2] = [pointsArray[i][0][1], pointsArray[i][1][1]].sort((a,b) => a - b)
    if(x1 === x2) {
      //vertical
      for(let j = y1; j <= y2; j++) {
        table[`${x1},${j}`] ? table[`${x1},${j}`] += 1 : table[`${x1},${j}`] = 1
      }
    } else if(y1 === y2) {
      //orizontal
      for(let z = x1; z <= x2; z++) {
        table[`${z},${y1}`] ? table[`${z},${y1}`] += 1 : table[`${z},${y1}`] = 1
      }
    } else {
      //diagonal

        const [x, y] = pointsArray[i][0]
        const [x2a, y2a] = pointsArray[i][1]

        if (x > x2a && y > y2a) {
          let j = y2a
          for (let i = x2a; i <= x; i++) {
            table[`${i}-${j}`] = table[`${i}-${j}`] ? table[`${i}-${j}`] + 1 : 1
            j++
          }
        } else if (x > x2a && y < y2a) {
          let j = y2a
          for (let i = x2a; i <= x; i++) {
            table[`${i}-${j}`] = table[`${i}-${j}`] ? table[`${i}-${j}`] + 1 : 1
            j--
          }
        } else if (x < x2a && y > y2a) {
          let j = y
          for (let i = x; i <= x2; i++) {
            table[`${i}-${j}`] = table[`${i}-${j}`] ? table[`${i}-${j}`] + 1 : 1
            j--
          }
        } else if (x < x2 && y < y2a) {
          let j = y
          for (let i = x; i <= x2; i++) {
            table[`${i}-${j}`] = table[`${i}-${j}`] ? table[`${i}-${j}`] + 1 : 1
            j++
          }
        }
    }
  }
    const total2 = Object.values(table).filter(x => x > 1 ).length
    console.log(total2)
}

part2(pointsArray)
