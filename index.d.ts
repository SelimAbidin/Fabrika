
type integer = number;

/**
 * removes undefined, false, 0, null and return a new array
 * @param {array<any>} array
 * @return {array<any>}
 */
export function noFalse(array: any[]): any[];

/**
 * replace undefined, false, 0, null with value and return a new array
 * @param {array<any>} array
 * @param {any} value
 * @return {array<any>}
 */
export function replaceFalseWith(array: any[], value: any): any[]

/**
 * reverse creates a new array and reverse it before return.
 * If you want to do mutate the array, you will probably be ok with Array.prototype.reverse method too.
 * @param {array<any>} a
 * @return {array}
 */
export function reverse(a: any[]): any[]

/**
 * creates a new array from the input array and remove second repeating elements.
 * [3,1,2,3] >> uniq >> [3,1,2]
 * @param {Array} array
 * @param {any} array
 * @returns {Array}
 */
export function uniq(array: any[]): void

/**
 *  
 * @param {Array} array
 * @param {any} property
 * @param {any} out (optional)
 * @returns {Array}
 */
export function uniqBy(array: any[], property: string | integer, out: any[]): any[]

/**
 *  takes an object array and filter unique values by properties array.
 * 
 * Example : 
 * [{x:1, y:2}, {x:2, y:2}, {x:1, y:2}], ['x', 'y'] >> [{x:1, y:2}, {x:2, y:2}]
 * 
 * @param {Array} array
 * @param {string[]} property
 * @returns {Array}
 */
export function uniqByProps(a: object[], properties: string[] | integer[]): any[]