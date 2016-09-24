import _while from '../dist/while';
import assert from 'assert';

describe('while()', () => {
    it('should generates an enumerable sequence by repeating a source sequence as long as the given loop condition holds', () => {
        let x = 5;
        const xs = {
            [Symbol.iterator]: function*() {
                yield x--
            }
        };
        assert.deepEqual(Array.from(xs::_while(() => x > 0)), [5, 4, 3, 2, 1]);
    });
});
