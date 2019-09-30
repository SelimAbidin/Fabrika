const {fromPoint} = require('../geoJSONToWKT')

describe.only('geoJSONToWKT test', function () {
    it('type should be feature', function () {
        var geojsonFeature = {
            'type': 'FeatureCollection'
        }
        expect(() => {
            fromPoint(geojsonFeature)
        }).toThrowError()
    })

    it('[10, 20] should be converted "Point (10 20)"', function () {
        var geojsonFeature = {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [10, 20]
            }
        }
        const wkt = fromPoint(geojsonFeature)
        expect(wkt).toBe('Point (10 20)')
    })

    it('unknown geometry type should throw Error', function () {
        var geojsonFeature = {
            'type': 'Feature',
            'geometry': {
                'type': 'Point2',
                'coordinates': [10, 20]
            }
        }
        expect(() => fromPoint(geojsonFeature)).toThrow()
    })
})
