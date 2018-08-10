'use strict'
const store = require('../store.js')

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
  console.log(store.game) // cells [] id over
}
const nextMove = function (response) {
  for (let i = 8; i >= 0; i--) {
    if (response.game.cells[i] === 'x') {
      $('#' + [i]).html('X')
      console.log([i])
    } else if (response.game.cells[i] === 'o') {
      $('#' + [i]).html('O')
      console.log([i])
    }
  }
  // $('#0').append('X')
// $('#[response.value]')
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
