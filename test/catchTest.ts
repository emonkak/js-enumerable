import * as assert from 'assert';
import * as sinon from 'sinon';
import Enumerable from '../src/';

describe('catch()', () => {
    it('should creates a sequence that corresponds to the source sequence', () => {
        const xs = [1, 2, 3];
        const ys = [4, 5, 6];
        const handler = sinon.spy((e: Error) => ys);
        assert.deepEqual(new Enumerable(xs).catch(handler).toArray(), [1, 2, 3]);
        sinon.assert.notCalled(handler);
    });

    it('should concatenate it with the sequence resulting from calling an exception handler function in case of an error', () => {
        const xs = {
            [Symbol.iterator]: function*() {
                yield 1;
                yield 2;
                yield 3;
                throw new Error();
            }
        };
        const ys = [4, 5, 6];
        const handler = sinon.spy((e: Error) => ys);
        assert.deepEqual(new Enumerable(xs).catch(handler).toArray(), [1, 2, 3, 4, 5, 6]);
        sinon.assert.called(handler);
        sinon.assert.calledWith(handler, sinon.match.instanceOf(Error));
    });
});
