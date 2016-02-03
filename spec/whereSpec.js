import where from '../dist/functions/where'

describe('where()', function() {
    it('should filters a sequence of values based on a predicate', function() {
        let result = [1, 2, 3, 4]::where(x => x % 2 == 0)
        expect(Array.from(result)).toEqual([2, 4])
    })
})
