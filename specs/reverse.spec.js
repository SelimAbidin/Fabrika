import {reverse} from '../reverse'
const deepFreeze = require('deepfreeze')

describe('reverse testing', () => {
    it('[1,2,3] result should be [3,2,1]', () => {
        const array = [1, 2, 3]
        const uniqs = reverse(array)
        expect(uniqs).toEqual([3, 2, 1])
    })

    it('should return a new array', () => {
        const array = deepFreeze([1, 2, 3])
        const uniqs = reverse(array)
        expect(uniqs).toEqual([3, 2, 1])
    })
})
