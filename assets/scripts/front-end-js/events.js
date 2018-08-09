'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const signUp = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.fail)
}

const handlers = function () {
  $('#sign-up').on('submit', signUp)
}

module.exports = {
  handlers
}
