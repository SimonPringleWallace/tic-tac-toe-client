'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
const gamePlay = require('./game-play/game-events.js')
const winTie = require('./../findWinner-if-else.js')

// handlers

const signUp = function () {
  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.fail)
  event.preventDefault()
  $('#sign-up-modal').modal('hide')
  return false
}

const signIn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
  $('#sign-in-modal').modal('hide')
  return false
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
  $('#change-password-modal').modal('hide')
  return false
}

const startGame = function () {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameStart)
    .catch(ui.fail)
}

const updateGame = function () {
  event.preventDefault()
  // can I take all of the store.game info and use gamePlaytoggle xandO and do all the win logic add x or o to it ahead of time test, it for wins, then send the apprpiate info to the api?
  if (store.game.cells[this.id] === '' && store.game.over === false) {
  // store the cells array coming back and then check it for a valid move before sening AJAX - something like this =  if (store.user.cells[this.id]) === '' {} else space taken
    let data = {
      'game': {
        'cell': {
          'index': parseInt(this.id),
          'value': gamePlay.toggleXandO()
        },
        'over': winTie.isGameOver(this.id)
      }
    }
    store.lastMove = data.game.cell.value
    data = JSON.stringify(data)
    api.updateGame(data)
      .then(ui.nextMove)
      .catch(ui.fail)
  } else {
    const textBox = $('#winbox')
    if (store.game.over === true) {
      textBox.html("I know it's hard, but the game's over, click 'start' to play again!")
    } else if (store.game.cells[this.id] !== '') {
      textBox.html('Fool! Does that space look blank to you?')
    }
  }
}
const getPastGames = function () {
  event.preventDefault()

  api.getPastGames()
    .then(ui.pastGames)
    .catch(ui.fail)
}

const hideRudeness = function () {
  event.preventDefault()
  $('#winbox').html('')
}

const wipeGames = function () {
  event.preventDefault()
  $('#games-holder').html('')
}

const handlers = function () {
  $('#sign-in-modal-button').on('click', hideRudeness)
  $('#sign-up').on('submit', signUp)
  $('#sign-in').on('submit', signIn)
  $('#sign-out').on('click', signOut)
  $('#change-password').on('submit', changePW)
  $('#new-game').on('click', startGame)
  $('div.box').on('click', updateGame)
  $('#past-games-modal-button').on('click', getPastGames)
  $('.close').on('click', wipeGames)
}

module.exports = {
  handlers
}
