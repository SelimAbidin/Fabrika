
function fromPoint (geojson) {
    if (geojson.type.toLowerCase() === 'feature') {
        const {type, coordinates} = geojson.geometry
        if (type === 'Point') {
            return `Point (${coordinates[0]} ${coordinates[1]})`
        } else {
            throw new TypeError(`"${type}" is not supported`)
        }
    } else {
        throw new TypeError(`"${geojson.type}" is not supported`)
    }
}

module.exports = {
    fromPoint
}
