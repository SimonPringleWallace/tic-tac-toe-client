'use strict'
// 1. accept a blank array of 9 items
// 2. add items to this array at particular places
// 3. determine whether someone has won base off of a the placements of information
//    the array

const XorO = require('./x-o-or-taken-logic.js')
const declareWinner = require('./findWinner-if-else.js')

const xO = false

const gameLogic = function (xO, array, numZeroToEight) {
  XorO.playXorO(xO, array, numZeroToEight)
  declareWinner.findWinner(array)
}
console.log('logic-eh!')
