import * as sinon from 'sinon';
import Enumerable from './Enumerable';

describe('forEach()', () => {
    it('should enumerates the sequence and invokes the given action for each value in the sequence', () => {
        const spy = sinon.spy();
        const xs = [1, 2, 3, 4];
        new Enumerable(xs).forEach(x => spy(x));
        sinon.assert.callCount(spy, 4);
        sinon.assert.calledWith(spy.getCall(0), 1);
        sinon.assert.calledWith(spy.getCall(1), 2);
        sinon.assert.calledWith(spy.getCall(2), 3);
        sinon.assert.calledWith(spy.getCall(3), 4);
    });
});
