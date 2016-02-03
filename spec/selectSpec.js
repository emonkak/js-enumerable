import select from '../dist/functions/select'

describe('select()', function() {
    it('should project each element of a sequence', function() {
        let result = [1, 2, 3, 4]::select(x => x * 2)
        expect(Array.from(result)).toEqual([2, 4, 6, 8])
    })
})
