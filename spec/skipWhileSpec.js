import skipWhile from '../dist/functions/skipWhile'

describe('skipWhile()', function() {
    it('should skip elements in a sequence while a condition is true', function() {
        let result

        result = [1, 2, 3, 4]::skipWhile(x => x % 2 === 0)
        expect(Array.from(result)).toEqual([1, 2, 3, 4])

        result = [4, 3, 2, 1]::skipWhile(x => x % 2 === 0)
        expect(Array.from(result)).toEqual([3, 2, 1])
    })
})

