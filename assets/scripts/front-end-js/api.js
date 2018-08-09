'use strict'
const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/' + '/sign-up',
    method: 'POST',
    header: 'Content-Type: application/json',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/' + '/sign-in',
    method: 'POST',
    data
  })
}
const signOut = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/' + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
