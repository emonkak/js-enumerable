import _do from '../dist/do';
import assert from 'assert';
import sinon from 'sinon';

describe('do()', function() {
    it('should lazily invokes an action for each value in the sequence, and executes an action upon exceptional termination', function() {
        const spy = sinon.spy();
        const result = [1, 2, 3, 4]::_do(spy);
        sinon.assert.notCalled(spy);
        assert.deepEqual(Array.from(result), [1, 2, 3, 4]);
        sinon.assert.callCount(spy, 4);
        sinon.assert.calledWith(spy.getCall(0), 1);
        sinon.assert.calledWith(spy.getCall(1), 2);
        sinon.assert.calledWith(spy.getCall(2), 3);
        sinon.assert.calledWith(spy.getCall(3), 4);
    });
});
