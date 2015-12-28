# ranks

[![NPM Version](https://img.shields.io/npm/v/ranks.svg)](https://www.npmjs.com/package/ranks)
[![Build Status](https://travis-ci.org/dsernst/ranks.svg?branch=master)](https://travis-ci.org/dsernst/ranks)
[![Coverage Status](https://coveralls.io/repos/dsernst/ranks/badge.svg?branch=master&service=github)](https://coveralls.io/github/dsernst/ranks?branch=master)

### Map an array of numbers into their fractional ranks

## Usage

```js
rank([1, 8, 5, 3, 12, 10]) // [1, 4, 3, 2, 6, 5]
```

Use the [fractional mean](https://en.wikipedia.org/wiki/Ranking#Strategies_for_assigning_rankings) in the case of ties:

```js
rank([1, 1, 1, 2]) // [2, 2, 2, 4]
rank([1, 1, 1, 1]) // [2.5, 2.5, 2.5, 2.5]
```

## Tests

Run the unit tests with `npm test`:

```
> ava tests.js


  ✔ rank should map arrays to their ranks
  ✔ rank should resolve ties at the mean

  2 tests passed
```
