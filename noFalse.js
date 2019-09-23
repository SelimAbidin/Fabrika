
export function noFalse (array) {
    return array.filter(i => i)
}

function replaceFalseWith (array, value) {
    return array.map(i => {
        if (i) {
            return i
        }
        return value
    })
}

module.exports = {
    noFalse,
    replaceFalseWith
}
