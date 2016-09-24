import assert from 'assert';
import repeat from '../dist/repeat';

describe('repeat()', () => {
    it('should generates a sequence by repeating the given value.', () => {
        const iterator1 = [1, 2, 3]::repeat()[Symbol.iterator]();
        assert.deepEqual(iterator1.next(), { done: false, value: 1 });
        assert.deepEqual(iterator1.next(), { done: false, value: 2 });
        assert.deepEqual(iterator1.next(), { done: false, value: 3 });
        assert.deepEqual(iterator1.next(), { done: false, value: 1 });
        assert.deepEqual(iterator1.next(), { done: false, value: 2 });
        assert.deepEqual(iterator1.next(), { done: false, value: 3 });
        assert.deepEqual(iterator1.next(), { done: false, value: 1 });

        const iterator2 = [1, 2, 3]::repeat(2)[Symbol.iterator]();
        assert.deepEqual(iterator2.next(), { done: false, value: 1 });
        assert.deepEqual(iterator2.next(), { done: false, value: 2 });
        assert.deepEqual(iterator2.next(), { done: false, value: 3 });
        assert.deepEqual(iterator2.next(), { done: false, value: 1 });
        assert.deepEqual(iterator2.next(), { done: false, value: 2 });
        assert.deepEqual(iterator2.next(), { done: false, value: 3 });
        assert.deepEqual(iterator2.next(), { done: true, value: undefined });
    });
});
