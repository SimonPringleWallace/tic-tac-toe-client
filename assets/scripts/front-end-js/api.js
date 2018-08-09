'use strict'
const store = require('../store.js')
const config = require('../config.js')
const signUp = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/' + 'sign-up',
    method: 'POST',
    header: 'Content-Type: application/json',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/' + 'sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const changePW = function (data) {
  console.log(data)
  console.log(store.user.token)
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/' + 'change-password',
    method: 'PATCH',
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePW
}
