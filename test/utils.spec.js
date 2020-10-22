import { isFillBag } from '../src/utils'

describe("Test all functions in utils", () => {
    describe("isFeelBag", () => {
        const numbers = [1, 3, 7, 12, 26]
        it("Array contains a sub group of 2 numbers that sums to a number", () => {
            const number = 10
            expect(new Set(isFillBag(numbers, number))).toEqual(new Set([3,7]))
        })
        it("Array contains a sub group of 3 numbers that sums to a number", () => {
            const number = 16
            expect(new Set(isFillBag(numbers, number))).toEqual(new Set([1,3,12]))
        })
        it("All numbers in array sum to a number", () => {
            const number = 49
            expect(new Set(isFillBag(numbers, number))).toEqual(new Set(numbers))
        })
        it("Array doesn't contain a sub group that sums to a number", () => {
            const number = 9
            expect(isFillBag(numbers, number)).toEqual(undefined)
        })
    })
});
  
  