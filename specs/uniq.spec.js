import {uniq, uniqBy,uniqByProps} from "../uniq"
const deepFreeze = require("deepfreeze")

describe("uniq testing", () => {

    it("[1,2,3,3] result should be [1,2,3]", () => {
        const array = [1,2,3,3]
        const uniqs = uniq(array)
        expect(uniqs).toEqual([1,2,3])
    })

    it("[3,1,2,3] result should be [3,1,2]", () => {
        const array = [3,1,2,3]
        const uniqs = uniq(array)
        expect(uniqs).toEqual([3,1,2])
    })

    it("should return a new array", () => {
        const array = deepFreeze([1,2,3,3])
        const uniqs = uniq(array)
        expect(uniqs).toEqual([1,2,3])
    })
})


describe("uniqBy testing", () => {

    it("should be objects with duplicate x values removed", () => {
        const array = [
            {x:1, y:1},
            {x:2, y:1},
            {x:1, y:1},
        ]
        const uniqs = uniqBy(array, "x")
        expect(uniqs).toEqual([{x:1, y:1},{x:2, y:1}])
    })


    it("should be objects with duplicate y values removed", () => {
        const array = [
            {x:1, y:1},
            {x:2, y:1},
            {x:1, y:1},
        ]
        const uniqs = uniqBy(array, "y")
        expect(uniqs).toEqual([{x:1, y:1}])
    })

    it("should be objects with duplicate y values removed", () => {
        const array = deepFreeze([
            {x:1, y:1},
            {x:2, y:1},
            {x:1, y:1},
        ])
        const uniqs = uniqBy(array, "y")
        expect(uniqs).toEqual([{x:1, y:1}])
    })

})

describe("uniqByProps testing", () => {

    it("should be object with duplicate properties ([x,y]) removed", () => {
        const array = [
            {x:1, y:1},
            {x:2, y:1},
            {x:1, y:1},
        ]
        const uniqs = uniqByProps(array, ["x", "y"])
        expect(uniqs).toEqual([{x:1, y:1},{x:2, y:1}])
    })

    it("should be objects with duplicate properties ([x,y]) removed", () => {
        const array = [
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:2, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
        ]
        const uniqs = uniqByProps(array, ["x", "y"])
        expect(uniqs).toEqual([{x:1, y:1},{x:2, y:1}])
    })


    it("should be objects with duplicate properties ([x,y]) removed", () => {
        const array = [
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:2, y:1},
            {x:2, y:1},
            {x:2, y:1},
            {x:2, y:1},
            {x:2, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
            {x:1, y:1},
        ]
        const uniqs = uniqByProps(array, ["x", "y"])
        expect(uniqs).toEqual([{x:1, y:1},{x:2, y:1}])
    })

    it("should be mutate array passed as an argument", () => {
        const array = deepFreeze([
            {x:1, y:1},
            {x:2, y:1},
            {x:1, y:1},
        ])

        const uniqs = uniqByProps(array, ["x", "y"])
        expect(uniqs).toEqual([{x:1, y:1},{x:2, y:1}])
    })

    it("should be object with duplicate properties ([x,y]) removed and keep duplicate (z) params ", () => {
        const array = [
            {x:1, y:1, z:1},
            {x:2, y:1, z:2},
            {x:1, y:1, z:3},
        ]
        const uniqs = uniqByProps(array, ["x", "y"])
        expect(uniqs).toEqual([{x:1, y:1, z:1},{x:2, y:1,z:2}])
    })

})