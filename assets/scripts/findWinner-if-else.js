'use strict'
const store = require('./store.js')
const gamePlay = require('./front-end-js/game-play/game-events.js')

const isGameOver = function (id) {
  const lettervalue = gamePlay.toggleXandO()
  store.game.cells.splice(id, 1, lettervalue)
  let value = false
  let tie = false
  const checkForBlank = function (first, second, third) {
    if (first && second && third !== '') {
      value = true
      console.log(lettervalue + 'Wins!')
    } else {
      value = false
    }
  }
  if (store.game.cells.includes('')) { // need to account for the fact that in the first few moves if the square are black they all equal eachother. the if else goes until it hits the first valid case.
    if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
      checkForBlank(store.game.cells[0], store.game.cells[1], store.game.cells[2])
    } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
      checkForBlank(store.game.cells[3], store.game.cells[4], store.game.cells[5])
    } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
      checkForBlank(store.game.cells[6], store.game.cells[7], store.game.cells[8])
    } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
      checkForBlank(store.game.cells[0], store.game.cells[3], store.game.cells[6])
    } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
      checkForBlank(store.game.cells[1], store.game.cells[4], store.game.cells[7])
    } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
      checkForBlank(store.game.cells[2], store.game.cells[5], store.game.cells[8])
    } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
      checkForBlank(store.game.cells[0], store.game.cells[4], store.game.cells[8])
    } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
      checkForBlank(store.game.cells[2], store.game.cells[4], store.game.cells[6])
    } else {
      value = false
    }
  } else if (store.game.cells.includes('') !== true) {
    tie = true
    store.tie = tie
    value = true
  }
  return value
}
module.exports = {
  isGameOver
}
