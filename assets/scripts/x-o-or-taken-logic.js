'use strict'
const playXorO = function (xO, array, numZeroToEight) {
  if (xO) {
    if (array[numZeroToEight] === '') {
      array.splice(numZeroToEight, 1, 'X')
      console.log(array)
    } else {
      console.log('that move has been taken!')
    }
  } else if (!xO) {
    if (array[numZeroToEight] === '') {
      array.splice(numZeroToEight, 1, 'O')
      console.log(array)
    } else {
      console.log('that move has been taken!')
    }
  }
}
console.log('x-o -eh!')

module.exports = {
  playXorO
}
