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

// require('should')
// rank([1, 8, 5, 3, 12, 10]).should.eql([1, 4, 3, 2, 6, 5])
//
// // take median of ties:
// rank([1, 1, 1, 2]).should.eql([2, 2, 2, 4])
// rank([1, 1, 1, 1]).should.eql([2.5, 2.5, 2.5, 2.5])

module.exports = rank
