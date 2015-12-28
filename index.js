const _ = require('lodash')

// Function to map an array of numbers into their ranks
// e.g. rank([1, 8, 5, 3, 12, 10]) === [1, 4, 3, 2, 6, 5]
function rank(array) {
  const sorted = array.slice().sort((a, b) => {return a - b})
  return array.map(function findIndex(value) {
    // Use average to break ties
    return (_.sortedIndex(sorted, value) + 1 + _.sortedLastIndex(sorted, value)) / 2
  })
}

module.exports = rank
