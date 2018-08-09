'use strict'

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

module.exports = {
  signUp,
  signIn
}
