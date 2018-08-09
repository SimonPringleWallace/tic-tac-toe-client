'use strict'
const config = require('../config.js')

const signUp = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/' + '/sign-up',
    method: 'POST',
    header: 'Content-Type: application/json',
    data
  })
}
module.exports = {
  signUp
}
