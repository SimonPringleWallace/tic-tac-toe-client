'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
const gamePlay = require('./game-play/game-events.js')

// handlers

const signUp = function () {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.fail)
}

const signIn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const signOut = function () {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const changePW = function () {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.fail)
}

const startGame = function () {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameStart)
    .catch(ui.fail)
}

const updateGame = function () {
  event.preventDefault()
  let data = {
    'game': {
      'cell': {
        'index': parseInt(this.id),
        'value': 'x'
      },
      'over': false
    }
  }
  data = JSON.stringify(data)

  api.updateGame(data)
    .then(ui.nextMove)
    .catch(ui.fail)
}

const handlers = function () {
  $('#sign-up').on('submit', signUp)
  $('#sign-in').on('submit', signIn)
  $('#sign-out').on('click', signOut)
  $('#change-password').on('submit', changePW)
  $('#new-game').on('click', startGame)
  $('div.box').on('click', updateGame)
}

module.exports = {
  handlers
}
