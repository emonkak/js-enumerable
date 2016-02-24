import groupJoin from '../dist/groupJoin'
import assert from 'assert'

describe('groupJoin()', function() {
    it('should correlates the elements of two sequences based on equality of keys and groups the results', function() {
        let xs = [0, 1, 2]
        let ys = [4, 7, 6, 2, 3, 4, 8, 9]
        let result = xs::groupJoin(
            ys,
            x => x % 3,
            y => y % 3,
            (x, i) => x + '-' + i.join('')
        )
        assert.deepEqual(Array.from(result), ['0-639', '1-474', '2-28'])

        xs = [0, 1, 2]
        ys = [3, 6, 4]
        result = xs::groupJoin(
            ys,
            x => x % 3,
            y => y % 3,
            (x, i) => x + '-' + i.join('')
        )
        assert.deepEqual(Array.from(result), ['0-36', '1-4', '2-'])
    })
})
