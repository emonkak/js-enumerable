import * as assert from 'assert';
import Enumerable from './Enumerable';

describe('doWhile()', () => {
    it('should generates an enumerable sequence by repeating a source sequence as long as the given loop postcondition holds', () => {
        let x = 0;
        const xs = {
            [Symbol.iterator]: function*() {
                yield x++;
            }
        };
        assert.deepEqual(new Enumerable(xs).doWhile(() => x < 5).toArray(), [0, 1, 2, 3, 4]);
        assert.deepEqual(new Enumerable(xs).doWhile(() => x < 5).toArray(), [5]);
    });
});
