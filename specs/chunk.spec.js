import { chunk } from '../chunk'

// const deepFreeze = require('deepfreeze')

describe('chunk testing', () => {
    it('[1,2,3,3] result should be [[1,2],[3,3]]', () => {
        const array = [1, 2, 3, 3]
        let chunks = chunk(array, 2)
        expect(chunks.length).toEqual(2);
        expect(chunks[0]).toEqual([1, 2]);
        expect(chunks[1]).toEqual([3, 3]);
    })
})
