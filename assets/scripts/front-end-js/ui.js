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

module.exports = {
  signUpSuccess,
  fail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFailure
}
