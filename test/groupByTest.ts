import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('groupBy()', () => {
    it('should groups the elements of a sequence according to a specified key selector function', () => {
        const result1 = new Enumerable([1, 2, 3, 4]).groupBy(x => x % 2 === 0 ? 'even' : 'odd');
        assert.deepEqual(Array.from(result1), [['odd', [1, 3]], ['even', [2, 4]]]);

        const result2 = new Enumerable([1, 2, 3, 4]).groupBy(x => x % 2 === 0 ? 'even' : 'odd', x => x * 2);
        assert.deepEqual(Array.from(result2), [['odd', [2, 6]], ['even', [4, 8]]]);

        const result3 = new Enumerable([1, 2, 3, 4]).groupBy(x => x % 2 === 0 ? 'even' : 'odd', x => x * 2, (k, vs) => vs);
        assert.deepEqual(Array.from(result3), [[2, 6], [4, 8]]);
    });
});
