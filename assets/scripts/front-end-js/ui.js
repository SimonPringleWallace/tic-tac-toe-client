'use strict'

const signUpSuccess = function () {
  console.log('eh!')
}
const fail = function () {
  console.log('fail!')
}
const signInSuccess = function () {
  console.log('Welcome!')
}
const signInFail = function () {
  console.log('You lie! Please check your credentials and try again')
}

module.exports = {
  signUpSuccess,
  fail,
  signInSuccess,
  signInFail
}
