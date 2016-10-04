import * as sinon from 'sinon';
import Enumerable from '../src';

describe('forEach()', () => {
    it('should enumerates the sequence and invokes the given action for each value in the sequence', () => {
        const spy = sinon.spy();
        const xs = [1, 2, 3, 4];
        new Enumerable(xs).forEach(x => spy(x));
        sinon.assert.callCount(spy, 4);
        sinon.assert.calledWith(spy.getCall(0) as sinon.SinonSpy, 1);
        sinon.assert.calledWith(spy.getCall(1) as sinon.SinonSpy, 2);
        sinon.assert.calledWith(spy.getCall(2) as sinon.SinonSpy, 3);
        sinon.assert.calledWith(spy.getCall(3) as sinon.SinonSpy, 4);
    });
});
