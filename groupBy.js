

function groupBy(array, key) {
    return array.reduce((acc, curr) => {

        let valueKey = curr[key]

        if (!Array.isArray(acc[valueKey])) acc[valueKey] = []

        acc[valueKey].push(curr)
        return acc
    }, {})
}

module.exports = {
    groupBy
}