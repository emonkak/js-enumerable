import assert from 'assert';
import ignoreElements from '../dist/ignoreElements';
import sinon from 'sinon';

describe('ignoreElements()', () => {
    it('should ignores all elements in the source sequence', () => {
        const iterator = sinon.spy(function*() {
            yield 1
            yield 2
            yield 3
        });
        const source = {
            [Symbol.iterator]: iterator
        };
        assert.deepEqual(Array.from(source::ignoreElements()), []);
        sinon.assert.notCalled(iterator);
    });
});
