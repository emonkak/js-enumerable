import * as assert from 'assert';
import * as sinon from 'sinon';
import ignoreElements from '../src/ignoreElements';

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
        assert.deepEqual(Array.from(ignoreElements.call(source)), []);
        sinon.assert.notCalled(iterator);
    });
});
