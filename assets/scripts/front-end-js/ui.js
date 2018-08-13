'use strict'
const store = require('../store.js')
const gamePlay = require('./game-play/game-events.js')

const signUpSuccess = function () {
  $('#sign-up input').val('')
  $('#sign-up').hide()
  $('#winbox').html('Welcome! <br> What are you waiting for? <br> Sign in!')
  $('#fail').hide()

}
const fail = function () {
  $('#fail').show()
}
const signInSuccess = function (response) {
  $('#winbox').html('')
  $('#sign-in input').val('')
  $('#sign-in, #sign-up').hide()
  $('#sign-out, #new-game, #past-games, #change-password').show()
  $('#fail').hide()

  store.user = response.user
}
const signInFail = function () {
  $('#winbox').html('You lie! <br> Please check your credentials and try again')
}
const signOutSuccess = function () {
  $('#board, #sign-out, #past-games, #fail, #new-game, #change-password').hide()
  $('#winbox').html('')
  $('#games-holder').html('')
  $('#sign-in, #sign-up').show()
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
  store.lastMove = undefined
  gamePlay.addThingsToBoard(response)
  $('#board').show()
  $('#games-holder').html('')
  $('#fail').hide()
}
const pastGames = function (response) {
  console.log(response.games)
  response.games.forEach(game => {
    $('#games-holder').append(`<li> ${game.cells} </li>`)
  })
}
const nextMove = function (response) {
  store.game = response.game
  gamePlay.addThingsToBoard(response)
  $('#winbox').html('')
  $('#fail').hide()
  $('#games-holder').html('')
  if (store.tie === true) {
    $('#board').hide()
    $('#winbox').html('Tie!')
    store.tie = false
    store.lastMove = undefined
  } else if (store.game.over === true) {
    // $('#board').hide()
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
