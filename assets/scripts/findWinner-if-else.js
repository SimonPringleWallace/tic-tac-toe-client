'use strict'
const findWinner = function (array) {
// "O" Winner
  if (array[0] && array[1] && array[2] === 'O') {
    console.log('O wins!')
  } else if (array[3] && array[4] && array[5] === 'O') {
    console.log('O wins!')
  } else if (array[6] && array[7] && array[8] === 'O') {
    console.log('O wins!')
  } else if (array[0] && array[3] && array[6] === 'O') {
    console.log('O wins!')
  } else if (array[1] && array[4] && array[7] === 'O') {
    console.log('O wins!')
  } else if (array[2] && array[5] && array[8] === 'O') {
    console.log('O wins!')
  } else if (array[0] && array[4] && array[8] === 'O') {
    console.log('O wins!')
  } else if (array[2] && array[4] && array[6] === 'O') {
    console.log('O wins!')
// "X" Wins
  } else if (array[0] && array[1] && array[2] === 'X') {
    console.log('X wins!')
  } else if (array[3] && array[4] && array[5] === 'X') {
    console.log('X wins!')
  } else if (array[6] && array[7] && array[8] === 'X') {
    console.log('X wins!')
  } else if (array[0] && array[3] && array[6] === 'X') {
    console.log('X wins!')
  } else if (array[1] && array[4] && array[7] === 'X') {
    console.log('X wins!')
  } else if (array[2] && array[5] && array[8] === 'X') {
    console.log('X wins!')
  } else if (array[0] && array[4] && array[8] === 'X') {
    console.log('X wins!')
  } else if (array[2] && array[4] && array[6] === 'X') {
    console.log('X wins!')
  }
}

module.exports = {
  findWinner
}
