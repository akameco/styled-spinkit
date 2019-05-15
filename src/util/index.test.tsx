import { roundTo } from '../util'

test('roundTo util function ', () => {
    expect(roundTo(4, 1)).toEqual(4);
    expect(roundTo(1.1337, 3)).toEqual(1.134);
})
