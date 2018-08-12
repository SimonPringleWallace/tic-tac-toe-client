'use strict'
const store = require('../store.js')
const gamePlay = require('./game-play/game-events.js')

const signUpSuccess = function () {
  console.log('eh!')
}
const fail = function () {
  console.log('fail!')
}
const signInSuccess = function (response) {
  console.log('Welcome!')
  store.user = response.user
}
const signInFail = function () {
  console.log('You lie! Please check your credentials and try again')
}
const signOutSuccess = function () {
  console.log('adios!')
}
const signOutFailure = function () {
  console.log('you will never leave me!')
}
const changePWSuccess = function () {
  console.log('your password has changed')
}
const newGameStart = function (response) {
  console.log('get playing!')
  store.game = response.game
  gamePlay.addThingsToBoard(response) //this and the change made to addthings to board, only work after a click.
  $('#winbox').html('')
  $('#board').show()
// console.log(store.game) // cells [] id over
}
const nextMove = function (response) {
  store.game = response.game
  gamePlay.addThingsToBoard(response)
  console.log(response)
  if (store.tie === true) {
    $('#board').hide()
    $('#winbox').html('Tie!')
    store.tie = false
  } else if (store.game.over === true) {
    $('#board').hide()
    $('#winbox').html(store.lastMove + ' wins!')
  }
}

module.exports = {
  signUpSuccess,
  fail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFailure,
  changePWSuccess,
  newGameStart,
  nextMove
}
// next take the response from the API, process it through win loss, and switch
// players
