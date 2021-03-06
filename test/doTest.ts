import * as assert from 'assert';
import * as sinon from 'sinon';
import Enumerable from './Enumerable';

describe('do()', () => {
    it('should lazily invokes an action for each value in the sequence, and executes an action upon exceptional termination', () => {
        const spy = sinon.spy();
        const result = new Enumerable([1, 2, 3, 4]).do(spy);
        sinon.assert.notCalled(spy);
        assert.deepEqual(Array.from(result), [1, 2, 3, 4]);
        sinon.assert.callCount(spy, 4);
        sinon.assert.calledWith(spy.getCall(0), 1);
        sinon.assert.calledWith(spy.getCall(1), 2);
        sinon.assert.calledWith(spy.getCall(2), 3);
        sinon.assert.calledWith(spy.getCall(3), 4);
    });
});
