import * as assert from 'assert';
import Enumerable from '../../src';

describe('repeat()', () => {
    it('should generates a sequence by repeating the given value', () => {
        const iterator1 = Enumerable.repeat(123)[Symbol.iterator]();
        assert.deepEqual(iterator1.next(), { done: false, value: 123 });
        assert.deepEqual(iterator1.next(), { done: false, value: 123 });
        assert.deepEqual(iterator1.next(), { done: false, value: 123 });
        assert.deepEqual(iterator1.next(), { done: false, value: 123 });

        const iterator2 = Enumerable.repeat(123, 3)[Symbol.iterator]();
        assert.deepEqual(iterator2.next(), { done: false, value: 123 });
        assert.deepEqual(iterator2.next(), { done: false, value: 123 });
        assert.deepEqual(iterator2.next(), { done: false, value: 123 });
        assert.deepEqual(iterator2.next(), { done: true, value: undefined });
    });
});
