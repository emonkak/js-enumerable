import * as assert from 'assert';
import * as sinon from 'sinon';
import _finally from '../src/finally';

describe('finally()', () => {
    it('should creates a sequence whose termination or disposal of an enumerator causes a finally action to be executed', () => {
        const source1 = [1, 2, 3];
        const finallyAction1 = sinon.spy();
        assert.deepEqual(Array.from(_finally.call(source1, finallyAction1)), [1, 2, 3]);
        sinon.assert.called(finallyAction1);

        const source2 = {
            [Symbol.iterator]: function*() {
                yield 1
                yield 2
                yield 3
                throw new Error()
            }
        };
        const finallyAction2 = sinon.spy();
        assert.throws(() => Array.from(_finally.call(source2, finallyAction2)));
        sinon.assert.called(finallyAction2);
    });
});
