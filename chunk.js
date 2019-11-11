

function chunk(array, count) {
    return Array.from({ length: array.length / count }).map(() => array.splice(0, count))
}

module.exports = {
    chunk
}
