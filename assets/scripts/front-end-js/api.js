'use strict'
const store = require('../store.js')
const config = require('../config.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
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
    url: config.apiUrl + '/sign-out',
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
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: '{}',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    data,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const getPastGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    data: '{}',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePW,
  newGame,
  updateGame,
  getPastGames
}
