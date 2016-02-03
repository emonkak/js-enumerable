import take from '../dist/functions/take'
import skip from '../dist/functions/skip'
import orderBy from '../dist/functions/orderBy'

describe('take()', function() {
    it('should return a specified number of contiguous elements from the start of a sequence.', function() {
        let result

        result = [1, 2, 3, 4]::take(2)
        expect(Array.from(result)).toEqual([1, 2])

        result = [3, 2, 4, 1]::orderBy()::take(2)
        expect(Array.from(result)).toEqual([1, 2])

        result = [3, 2, 4, 1]::orderBy()::skip(2)
        expect(Array.from(result)).toEqual([3, 4])
    })
})
