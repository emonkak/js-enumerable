import * as assert from 'assert';
import Enumerable from './bundle';

describe('repeat()', () => {
    it('should generates a sequence by repeating the given value.', () => {
        const iterator1 = new Enumerable([1, 2, 3]).repeat()[Symbol.iterator]();
        assert.deepEqual(iterator1.next(), { done: false, value: 1 });
        assert.deepEqual(iterator1.next(), { done: false, value: 2 });
        assert.deepEqual(iterator1.next(), { done: false, value: 3 });
        assert.deepEqual(iterator1.next(), { done: false, value: 1 });
        assert.deepEqual(iterator1.next(), { done: false, value: 2 });
        assert.deepEqual(iterator1.next(), { done: false, value: 3 });
        assert.deepEqual(iterator1.next(), { done: false, value: 1 });

        const iterator2 = new Enumerable([1, 2, 3]).repeat(2)[Symbol.iterator]();
        assert.deepEqual(iterator2.next(), { done: false, value: 1 });
        assert.deepEqual(iterator2.next(), { done: false, value: 2 });
        assert.deepEqual(iterator2.next(), { done: false, value: 3 });
        assert.deepEqual(iterator2.next(), { done: false, value: 1 });
        assert.deepEqual(iterator2.next(), { done: false, value: 2 });
        assert.deepEqual(iterator2.next(), { done: false, value: 3 });
        assert.deepEqual(iterator2.next(), { done: true, value: undefined });
    });
});
