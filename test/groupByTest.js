import assert from 'assert';
import groupBy from '../dist/groupBy';

describe('groupBy()', function() {
    it('should groups the elements of a sequence according to a specified key selector function', function() {
        let result = [1, 2, 3, 4]::groupBy(x => x % 2 === 0 ? 'even' : 'odd');
        assert.deepEqual(Array.from(result), [['odd', [1, 3]], ['even', [2, 4]]]);

        result = [1, 2, 3, 4]::groupBy(x => x % 2 === 0 ? 'even' : 'odd', x => x * 2);
        assert.deepEqual(Array.from(result), [['odd', [2, 6]], ['even', [4, 8]]]);

        result = [1, 2, 3, 4]::groupBy(x => x % 2 === 0 ? 'even' : 'odd', x => x * 2, (k, vs) => vs);
        assert.deepEqual(Array.from(result), [[2, 6], [4, 8]]);
    });
});
