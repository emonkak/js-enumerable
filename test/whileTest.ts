import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('while()', () => {
    it('should generates an enumerable sequence by repeating a source sequence as long as the given loop condition holds', () => {
        let x = 5;
        const xs = {
            [Symbol.iterator]: function*() {
                yield x--
            }
        };
        assert.deepEqual(new Enumerable(xs).while(() => x > 0).toArray(), [5, 4, 3, 2, 1]);
    });
});
