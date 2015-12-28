import test from 'ava'
import rank from './index.js'

test('rank should map arrays to their ranks', t => {
  t.same(rank([1, 8, 5, 3, 12, 10]), [1, 4, 3, 2, 6, 5])
})

test('rank should resolve ties at the mean', t => {
  t.same(rank([1, 1, 1, 2]), [2, 2, 2, 4])
  t.same(rank([1, 1, 1, 1]), [2.5, 2.5, 2.5, 2.5])
})
