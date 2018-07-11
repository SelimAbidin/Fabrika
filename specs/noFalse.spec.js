import {noFalse, replaceFalseWith} from '../noFalse'
const deepFreeze = require('deepfreeze')

describe('noFalse testing', () => {
    it('it should remove nulls', () => {
        const testArray = [1, null, 2, null, 3]
        let result = noFalse(testArray)
        expect(result).toEqual(expect.not.arrayContaining([null]))
    })

    it('it should remove undefineds', () => {
        const testArray = [1, undefined, 2, 3]
        let result = noFalse(testArray)
        expect(result).toEqual(expect.not.arrayContaining([undefined]))
    })

    it('it should remove 0', () => {
        const testArray = [1, 0, 2, 3]
        let result = noFalse(testArray)
        expect(result).toEqual(expect.not.arrayContaining([0]))
    })

    it('it should remove false', () => {
        const testArray = [1, false, 2, 3]
        let result = noFalse(testArray)
        expect(result).toEqual(expect.not.arrayContaining([false]))
    })

    it('it should remove -1', () => {
        const testArray = [1, null, undefined, false, 0, 2, 3]
        let result = noFalse(testArray)
        expect(result).toEqual(expect.not.arrayContaining([null, undefined, false]))
    })

    it('it should not remove -1', () => {
        const testArray = [1, -1, 2, 3]
        let result = noFalse(testArray)
        expect(result).toEqual(expect.arrayContaining([-1]))
    })

    it('it should not mutate array', () => {
        const testArray = deepFreeze([1, -1, 2, 3])
        let result = noFalse(testArray)
        expect(result).toEqual(expect.arrayContaining([-1]))
    })
})

describe('replaceFalseWith testing', () => {
    const value = 101
    it('it should remove nulls', () => {
        const testArray = [1, null, 2, null, 3]
        let result = replaceFalseWith(testArray, value)
        expect(result).toEqual(expect.not.arrayContaining([null]))
    })

    it('it should remove undefineds', () => {
        const testArray = [1, undefined, 2, 3]
        let result = replaceFalseWith(testArray, value)
        expect(result).toEqual(expect.not.arrayContaining([undefined]))
    })

    it('it should remove 0', () => {
        const testArray = [1, 0, 2, 3]
        let result = replaceFalseWith(testArray, value)
        expect(result).toEqual(expect.not.arrayContaining([0]))
    })

    it('it should remove false', () => {
        const testArray = [1, false, 2, 3]
        let result = replaceFalseWith(testArray, value)
        expect(result).toEqual(expect.not.arrayContaining([false]))
    })

    it('it should remove -1', () => {
        const testArray = [1, null, undefined, false, 0, 2, 3]
        let result = replaceFalseWith(testArray, value)
        expect(result).toEqual(expect.not.arrayContaining([null, undefined, false]))
    })

    it('it should not remove -1', () => {
        const testArray = [1, -1, 2, 3]
        let result = replaceFalseWith(testArray, value)
        expect(result).toEqual(expect.arrayContaining([-1]))
    })

    it('it should not mutate array', () => {
        const testArray = deepFreeze([1, -1, 2, 3])
        let result = replaceFalseWith(testArray, value)
        expect(result).toEqual(expect.arrayContaining([-1]))
    })

    it('it should replace 0 with 101', () => {
        const testArray = deepFreeze([1, 0, 2, 3])
        let result = replaceFalseWith(testArray, value)
        expect(result).toEqual(expect.arrayContaining([101]))
    })
})
