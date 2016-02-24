import forEach from '../dist/forEach'
import sinon from 'sinon'

describe('forEach()', function() {
    it('should enumerates the sequence and invokes the given action for each value in the sequence', function() {
        const spy = sinon.spy()
        const xs = [1, 2, 3, 4]
        xs::forEach(e => spy(e))
        sinon.assert.callCount(spy, 4)
        sinon.assert.calledWith(spy.getCall(0), 1)
        sinon.assert.calledWith(spy.getCall(1), 2)
        sinon.assert.calledWith(spy.getCall(2), 3)
        sinon.assert.calledWith(spy.getCall(3), 4)
    })
})
