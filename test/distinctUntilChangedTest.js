import assert from 'assert';
import distinctUntilChanged from '../dist/distinctUntilChanged';

describe('distinctUntilChanged()', () => {
    it('should returns consecutive distinct elements', () => {
        assert.deepEqual(Array.from([1, 2, 1, 2]::distinctUntilChanged()), [1, 2, 1, 2]);
        assert.deepEqual(Array.from([1, 1, 2, 2]::distinctUntilChanged()), [1, 2]);
        assert.deepEqual(Array.from([1, 2, 3, 4]::distinctUntilChanged(x => x % 2 === 0)), [1, 2, 3, 4]);
        assert.deepEqual(Array.from([1, 3, 2, 4]::distinctUntilChanged(x => x % 2 === 0)), [1, 2]);
    });
});

