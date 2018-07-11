
/**
 * removes undefined, false, 0, null and return a new array
 * @param {array<any>} array
 * @return {array<any>}
 */
export function noFalse (array) {
    return array.filter(i => i)
}

/**
 * replace undefined, false, 0, null with value and return a new array
 * @param {array<any>} array
 * @param {any} value
 * @return {array<any>}
 */
export function replaceFalseWith (array, value) {
    return array.map(i => {
        if (i) {
            return i
        }
        return value
    })
}
