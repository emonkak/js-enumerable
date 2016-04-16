import _catch from '../dist/catch';
import assert from 'assert';
import sinon from 'sinon';

describe('catch()', function() {
    it('should creates a sequence that corresponds to the source sequence', function() {
        const xs = [1, 2, 3];
        const ys = [4, 5, 6];
        const handler = sinon.spy(e => ys);
        assert.deepEqual(Array.from(xs::_catch(handler)), [1, 2, 3]);
        sinon.assert.notCalled(handler);
    });

    it('should concatenate it with the sequence resulting from calling an exception handler function in case of an error', function() {
        const xs = {
            [Symbol.iterator]: function*() {
                yield 1
                yield 2
                yield 3
                throw new Error()
            }
        };
        const ys = [4, 5, 6];
        const handler = sinon.spy(e => ys);
        assert.deepEqual(Array.from(xs::_catch(handler)), [1, 2, 3, 4, 5, 6]);
        sinon.assert.called(handler);
        sinon.assert.calledWith(handler, sinon.match.instanceOf(Error));
    });
});
