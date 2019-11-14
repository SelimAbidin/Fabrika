
function chunk (array, count) {
    return Array.from({ length: array.length / count })
        .map((_element, index) => array
            .slice(index * count, (index + 1) * count))
}

module.exports = {
    chunk
}
