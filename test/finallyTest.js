import _finally from '../dist/finally';
import assert from 'assert';
import sinon from 'sinon';

describe('finally()', function() {
    it('should creates a sequence whose termination or disposal of an enumerator causes a finally action to be executed', function() {
        const source1 = [1, 2, 3];
        const finallyAction1 = sinon.spy();
        assert.deepEqual(Array.from(source1::_finally(finallyAction1)), [1, 2, 3]);
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
        assert.throws(() => Array.from(source2::_finally(finallyAction2)));
        sinon.assert.called(finallyAction2);
    });
});
