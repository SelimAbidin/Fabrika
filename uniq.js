
function uniq (array) {
    return Array.from(new Set(array))
}

function uniqBy (array, property, out) {
    let seenValue = {}
    let temp
    return array.reduce((acc, cur) => {
        temp = cur[property]
        if (!seenValue[temp]) {
            seenValue[temp] = true
            acc[acc.length] = cur
        }

        return acc
    }, out !== undefined ? out : [])
}

function uniqByProps (array, properties) {
    let i, j, counter, element, element2

    let copyArray = array.concat()
    for (i = 0; i < copyArray.length; i++) {
        element = copyArray[i]

        for (j = i + 1; j < copyArray.length; j++) {
            element2 = copyArray[j]
            counter = 0
            properties.forEach(p => {
                if (element[p] === element2[p]) {
                    counter++
                }
            })

            if (counter === properties.length) {
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
