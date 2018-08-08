// 1. accept a blank array of 9 items
// 2. add items to this array at particular places
// 3. determine whether someone has won base off of a the placements of information
//    the array

const myGame = ['', '', '', '', '', '', '', '', '']

const gameLogic = function (array, numZeroToEight) {
const xO = false
  if (xO) {
    if (array[numZeroToEight] === '') {
      array.splice(numZeroToEight, 1, 'X')
      console.log(myGame)
    } else {
      console.log('that move has been taken!')
    }
  } else if (!xO) {
    if (array[numZeroToEight] === '') {
      array.splice(numZeroToEight, 1, 'O')
      console.log(myGame)
    } else {
      console.log('that move has been taken!')
    }
  }
  if (array[0] && array[1] && array[2] === 'O') {
    console.log('winner!')
  } else if (array[3] && array[4] && array[5] === 'O') {
    console.log('winner!')
  } else if (array[6] && array[7] && array[8] === 'O') {
    console.log('winner!')
  } else if (array[0] && array[3] && array[6] === 'O') {
    console.log('winner!')
  } else if (array[1] && array[4] && array[7] === 'O') {
    console.log('winner!')
  } else if (array[2] && array[5] && array[8] === 'O') {
    console.log('winner!')
  } else if (array[0] && array[4] && array[8] === 'O') {
    console.log('winner!')
  } else if (array[2] && array[4] && array[6] === 'O') {
    console.log('winner!')
  }
}
