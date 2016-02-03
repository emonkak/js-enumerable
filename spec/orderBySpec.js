import orderBy from '../dist/functions/orderBy'

describe('orderBy()', function() {
    it('should sort elements of a sequence', function() {
        let result

        result = [3, 2, 4, 1]::orderBy()
        expect(Array.from(result)).toEqual([1, 2, 3, 4])

        result = [3, 2, 4, 1]::orderBy(n => n % 2).thenBy(n => n)
        expect(Array.from(result)).toEqual([2, 4, 1, 3])
    })
})
