// 1. accept a blank array of 9 items
// 2. add items to this array at particular places
// 3. determine whether someone has won base off of a the placements of information
//    the array

const declareWinner = require('./findWinner.js')

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
  declarWinner.findWinner(array)
}
