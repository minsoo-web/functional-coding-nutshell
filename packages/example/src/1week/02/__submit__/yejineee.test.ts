import { accumulate } from './yejineee'

describe('accumulate', () => {
  it('case: 1', () => {
    expect(accumulate([1, 2, 3, 4, 5])).toBe(15)
  })
})
