

/**
 * creates a new array from the input array and remove second repeating elements.
 * [3,1,2,3] >> uniq >> [3,1,2] 
 * @param {Array} array 
 * @param {any} array 
 * @returns {Array}
 */
function uniq(array) {
    return Array.from(new Set(array))
}

/**
 * 
 * @param {Array} array 
 * @param {any} property
 * @param {any} out (optional)
 * @returns {Array}
 */
function uniqBy(array, property, out) {
    
    let seenValue = {}
    let temp
    return array.reduce((acc, cur) => {

        temp = cur[property]
        if(!seenValue[temp]) {
            seenValue[temp] = true
            acc[acc.length] = cur
        }
        
        return acc
    }, out !== undefined ? out : [])
}

/**
 * 
 * @param {Array} array 
 * @param {string[]} property
 * @returns {Array}
 */
function uniqByProps(array, properties) {

    let i,j,counter,hasAnother,element,element2

    let copyArray = array.concat()
    for (i = 0; i < copyArray.length; i++) {
        element = copyArray[i]
        
        hasAnother = false
        for (j = i + 1; j < copyArray.length; j++) {
            element2 = copyArray[j]
            counter = 0
            properties.forEach(p => {
                            if(element[p] === element2[p]) {
                                counter++
                            }
                        })

            if(counter === properties.length) {
                copyArray.splice(j, 1)
                j--
            }
        }
       
    }
    
    return copyArray
}

module.exports = {
    uniq,
    uniqBy,
    uniqByProps
}