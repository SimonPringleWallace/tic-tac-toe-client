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
  console.log(response)
  console.log('get playing!')
}

module.exports = {
  signUpSuccess,
  fail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFailure,
  changePWSuccess,
  newGameStart
}
