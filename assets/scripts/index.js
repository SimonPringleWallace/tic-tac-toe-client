'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const auth = require('./front-end-js/events.js')

$('#sign-out, #new-game, #past-games-modal-button, #fail, #board, #change-password-modal-button').hide()
$(() => {
  auth.handlers()
})
