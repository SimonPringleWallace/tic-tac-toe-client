'Use Strict'
const store = require('../../store.js')

const addThingsToBoard = function (response) {
  for (let i = 8; i >= 0; i--) {
    if (response.game.cells[i] === 'x') {
      $('#' + [i]).html('X')
    } else if (response.game.cells[i] === 'o') {
      $('#' + [i]).html('O')
    }
  }
}
const toggleXandO = function () {
  let value = 'x'
  if (typeof store.lastMove === 'undefined') {
    value = 'x'
  } else if (store.lastMove === 'x') {
    value = 'o'
  } else {
    value = 'x'
  }
  return value
}

const isGameOver = function () {
  store.game.cells.forEach(cell => {
    if (cell === '') {
      return false
    } else {
      return true
    }
  })
}

module.exports = {
  addThingsToBoard,
  toggleXandO,
  isGameOver
}
