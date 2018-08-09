'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')


// handlers

const signUp = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.fail)
}

const signIn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const handlers = function () {
  $('#sign-up').on('submit', signUp)
  $('#sign-in').on('submit', signIn)
}

module.exports = {
  handlers
}
