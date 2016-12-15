import * as assert from 'assert';
import * as sinon from 'sinon';
import Enumerable from './bundle';

describe('finally()', () => {
    it('should creates a sequence whose termination or disposal of an enumerator causes a finally action to be executed', () => {
        const source1 = [1, 2, 3];
        const finallyAction1 = sinon.spy();
        assert.deepEqual(new Enumerable(source1).finally(finallyAction1).toArray(), [1, 2, 3]);
        sinon.assert.called(finallyAction1);

        const source2 = {
            [Symbol.iterator]: function*() {
                yield 1;
                yield 2;
                yield 3;
                throw new Error();
            }
        };
        const finallyAction2 = sinon.spy();
        assert.throws(() => new Enumerable(source2).finally(finallyAction2).toArray());
        sinon.assert.called(finallyAction2);
    });
});
