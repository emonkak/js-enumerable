import last from '../dist/functions/last'
import orderBy from '../dist/functions/orderBy'
import skip from '../dist/functions/skip'
import take from '../dist/functions/take'

describe('last()', function() {
    it('should returns the last element of a sequence', function() {
        let result

        result = [1, 2, 3, 4]::last()
        expect(result).toBe(4)

        result = [3, 2, 4, 1]::orderBy()::last()
        expect(result).toBe(4)

        result = [3, 2, 4, 1]::orderBy()::take(2)::last()
        expect(result).toBe(2)

        result = [3, 2, 4, 1]::orderBy()::skip(2)::last()
        expect(result).toBe(4)

        result = [3, 2, 4, 1]::orderBy()::take(2)::skip(1)::last()
        expect(result).toBe(2)

        result = [3, 2, 4, 1]::orderBy()::skip(2)::take(1)::last()
        expect(result).toBe(3)
    })
})
