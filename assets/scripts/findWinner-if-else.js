'use strict'
const store = require('./store.js')
const gamePlay = require('./front-end-js/game-play/game-events.js')

const isGameOver = function (id) {
  const lettervalue = gamePlay.toggleXandO()
  store.game.cells.splice(id, 1, lettervalue)
  console.log(store.game.cells)
  let value = false
  if (store.game.cells.includes('')) { // need to account for the fact that in the first few moves if the square are black they all equal eachother.
    if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
      console.log(lettervalue + ' Wins!')
      value = true
    } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
      console.log(lettervalue + ' wins!')
      value = true
    } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
      console.log(lettervalue + ' wins!')
      value = true
    } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
      console.log(lettervalue + ' wins!')
      value = true
    } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
      console.log(lettervalue + ' wins!')
      value = true
    } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
      console.log(lettervalue + ' wins!')
      value = true
    } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
      console.log(lettervalue + ' wins!')
      value = true
    } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
      console.log(lettervalue + ' wins!')
      value = true
    } else {
      value = false
    }
  } else if (store.game.cells.includes('') !== true) {
    console.log('Tie!')
    value = true
  }
  console.log(value)
}
module.exports = {
  isGameOver
}
