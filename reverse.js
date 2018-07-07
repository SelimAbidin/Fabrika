

/**
 * reverse creates a new array and reverse it before return.
 * If you want to do mutate the array, you will probably be ok with Array.prototype.reverse method too. 
 * @param {array<any>} array
 * @return {array}
 */
export function reverse(array) {
    return array.concat().reverse()
}