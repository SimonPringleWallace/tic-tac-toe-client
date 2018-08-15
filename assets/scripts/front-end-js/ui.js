// for trivia, create an array that has numbers added to it after each click, based off of the length display different trivia, len = 1 display id 1 etc. at end of game, reset the array.

'use strict'
const store = require('../store.js')
const gamePlay = require('./game-play/game-events.js')

const signUpSuccess = function () {
  $('#sign-up input').val('')
  $('#sign-up-modal-button').hide()
  $('#winbox').html('Welcome! <br> What are you waiting for? <br> Sign in!')
  $('#fail').hide()
}

const fail = function () {
  $('#winbox').html('')
  $('#fail').show()
  $('#sign-up input').val('')
}

const signInSuccess = function (response) {
  $('#winbox').html('')
  $('#sign-in input').val('')
  $('#sign-in-modal-button, #sign-up-modal-button').hide()
  $('#sign-out, #new-game, #past-games-modal-button, #change-password-modal-button').show()
  $('#fail').hide()

  store.user = response.user
}
const signInFail = function () {
  $('#winbox').html('You lie! <br> Please check your credentials and try again')
  $('#sign-in input').val('')
}
const signOutSuccess = function () {
  $('#board, #sign-out, #past-games-modal-button, #fail, #new-game, #change-password-modal-button').hide()
  $('#winbox').html('')
  $('#games-holder').html('')
  $('#sign-in-modal-button, #sign-up-modal-button').show()
}
const signOutFailure = function () {
  $('#winbox').html('You will never leave me! <br> Sign out failed, please try again.')
  $('#sign-out input').val('')
}
const changePWSuccess = function () {
  $('#change-password input').val('')
  $('#winbox').html('your password has changed')
}
const newGameStart = function (response) {
  $('#winbox').html("get playin'!")
  store.game = response.game
  store.lastMove = undefined
  gamePlay.addThingsToBoard(response)
  $('#board').show()
  $('#games-holder').html('')
  $('#fail').hide()
}
const pastGames = function (response) {
  if (response.games.length === 0) {
    $('#games-holder').append(`<li> You have no previous conquests <br> get playin'! </li>`)
  } else {
    response.games.forEach(function (game, index) {
      $('#games-holder').append(`<li> Game ${index} ${game.cells} </li>`)
    })
  }
}
const nextMove = function (response) {
  store.game = response.game
  gamePlay.addThingsToBoard(response)
  $('#winbox').html('')
  $('#fail').hide()
  $('#games-holder').html('')
  if (store.tie === true) {
    $('#winbox').html('Tie!')
    store.tie = false
    store.lastMove = undefined
  } else if (store.game.over === true) {
    $('#winbox').html(store.lastMove + ' wins!')
    store.lastMove = undefined
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
  nextMove,
  pastGames
}
