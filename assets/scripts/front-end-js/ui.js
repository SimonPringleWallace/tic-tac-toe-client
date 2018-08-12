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
  $('#winbox').html('')
  $('#sign-in, #sign-in input').val('').hide()
  $('#sign-out, #new-game, #change-password').show()
  store.user = response.user
}
const signInFail = function () {
  $('#winbox').html('You lie! <br> Please check your credentials and try again')
}
const signOutSuccess = function () {
  $('#board').hide()
}
const signOutFailure = function () {
  $('#winbox').html('You will never leave me! <br> Sign out failed, please try again.')
}
const changePWSuccess = function () {
  console.log('your password has changed')
}
const newGameStart = function (response) {
$('#winbox').html("get playin'!")
  store.game = response.game
  gamePlay.addThingsToBoard(response)
  $('#board').show()
}
const nextMove = function (response) {
  store.game = response.game
  gamePlay.addThingsToBoard(response)
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
