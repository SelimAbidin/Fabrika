
import { groupBy } from '../groupBy'
const deepFreeze = require('deepfreeze')

describe('groupBy testing', () => {
    it('it should group array', () => {
        let array = [
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 2, y: 4 }
        ]
        let result = groupBy(array, 'x')
        expect(result).toEqual({ 1: [{ x: 1, y: 3 }], 2: [{ x: 2, y: 3 }, { x: 2, y: 4 }] })
    })

    it('it should group freezed array', () => {
        let array = [
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 2, y: 4 }
        ]
        let result = groupBy(deepFreeze(array), 'x')
        expect(result).toEqual({ 1: [{ x: 1, y: 3 }], 2: [{ x: 2, y: 3 }, { x: 2, y: 4 }] })
    })
})
