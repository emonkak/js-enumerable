import takeWhile from '../dist/functions/takeWhile'

describe('takeWhile()', function() {
    it('should yield elements from a sequence while a condition is true', function() {
        let result

        result = [1, 2, 3, 4]::takeWhile(x => x % 2 === 0)
        expect(Array.from(result)).toEqual([])

        result = [4, 3, 2, 1]::takeWhile(x => x % 2 === 0)
        expect(Array.from(result)).toEqual([4])
    })
})
