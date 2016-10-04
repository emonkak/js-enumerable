import * as assert from 'assert';
import repeat from '../src/repeat';

describe('repeat()', () => {
    it('should generates a sequence by repeating the given value.', () => {
        const iterator1 = repeat.call([1, 2, 3])[Symbol.iterator]();
        assert.deepEqual(iterator1.next(), { done: false, value: 1 });
        assert.deepEqual(iterator1.next(), { done: false, value: 2 });
        assert.deepEqual(iterator1.next(), { done: false, value: 3 });
        assert.deepEqual(iterator1.next(), { done: false, value: 1 });
        assert.deepEqual(iterator1.next(), { done: false, value: 2 });
        assert.deepEqual(iterator1.next(), { done: false, value: 3 });
        assert.deepEqual(iterator1.next(), { done: false, value: 1 });

        const iterator2 = repeat.call([1, 2, 3], 2)[Symbol.iterator]();
        assert.deepEqual(iterator2.next(), { done: false, value: 1 });
        assert.deepEqual(iterator2.next(), { done: false, value: 2 });
        assert.deepEqual(iterator2.next(), { done: false, value: 3 });
        assert.deepEqual(iterator2.next(), { done: false, value: 1 });
        assert.deepEqual(iterator2.next(), { done: false, value: 2 });
        assert.deepEqual(iterator2.next(), { done: false, value: 3 });
        assert.deepEqual(iterator2.next(), { done: true, value: undefined });
    });
});
