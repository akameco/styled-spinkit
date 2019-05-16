import { roundTo } from '../util'

test('roundTo util function ', () => {
  expect(roundTo(4, 1)).toStrictEqual(4)
  expect(roundTo(1.1337, 3)).toStrictEqual(1.134)
})
