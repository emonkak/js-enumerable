import first from '../dist/functions/first'
import orderBy from '../dist/functions/orderBy'
import skip from '../dist/functions/skip'
import take from '../dist/functions/take'

describe('first()', function() {
    it('should returns the first element of a sequence', function() {
        let result

        result = [1, 2, 3, 4]::first()
        expect(result).toEqual(1)

        result = [3, 2, 4, 1]::orderBy()::first()
        expect(result).toBe(1)

        result = [3, 2, 4, 1]::orderBy()::take(2)::first()
        expect(result).toBe(1)

        result = [3, 2, 4, 1]::orderBy()::skip(2)::first()
        expect(result).toBe(3)

        result = [3, 2, 4, 1]::orderBy()::take(2)::skip(1)::first()
        expect(result).toBe(2)

        result = [3, 2, 4, 1]::orderBy()::skip(2)::take(1)::first()
        expect(result).toBe(3)
    })
})
