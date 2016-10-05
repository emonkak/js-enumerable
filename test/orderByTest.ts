import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('orderBy()', () => {
    it('should sorts the elements of a sequence in ascending order according to a key', () => {
        const xs = [3, 2, 4, 1, 1];

        assert.deepEqual(new Enumerable(xs).orderBy().toArray(), [1, 1, 2, 3, 4]);
        assert.deepEqual(new Enumerable(xs).orderBy().aggregate([], (acc, x) => acc.concat([x])), [1, 1, 2, 3, 4]);
        assert.deepEqual(new Enumerable(new Enumerable(xs).orderBy()).toArray(), [1, 1, 2, 3, 4]);
        assert.deepEqual(new Enumerable(xs).orderBy(n => n % 2).thenBy(n => n).toArray(), [2, 4, 1, 1, 3]);
        assert.deepEqual(new Enumerable(xs).orderBy().take(2).toArray(), [1, 1]);
        assert.deepEqual(new Enumerable(xs).orderBy().take(2).take(999).toArray(), [1, 1]);
        assert.deepEqual(new Enumerable(xs).orderBy().take(2).skip(2).toArray(), []);
        assert.deepEqual(new Enumerable(xs).orderBy().take(999).toArray(), [1, 1, 2, 3, 4]);
        assert.deepEqual(new Enumerable(xs).orderBy().skip(2).toArray(), [2, 3, 4]);
        assert.deepEqual(new Enumerable(xs).orderBy().skip(2).take(1).toArray(), [2]);
        assert.deepEqual(new Enumerable(xs).orderBy().skip(999).toArray(), []);

        assert.strictEqual(new Enumerable(xs).orderBy().first(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().first(x => x % 2 === 0), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().first(x => x % 2 === 1), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).first(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).first(), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).first(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).first(), 2);

        assert.strictEqual(new Enumerable(xs).orderBy().firstOrDefault(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().firstOrDefault(x => x % 2 === 0), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().firstOrDefault(x => x % 2 === 1), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).firstOrDefault(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).firstOrDefault(), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).firstOrDefault(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).firstOrDefault(), 2);
        assert.strictEqual(new Enumerable([]).orderBy().firstOrDefault(), null);
        assert.strictEqual(new Enumerable([]).orderBy().firstOrDefault(x => x % 2 === 0), null);
        assert.strictEqual(new Enumerable([]).orderBy().firstOrDefault(x => x % 2 === 1), null);

        assert.strictEqual(new Enumerable(xs).orderBy().last(), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().last(x => x % 2 === 0), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().last(x => x % 2 === 1), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).last(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).last(), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).last(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).last(), 2);

        assert.strictEqual(new Enumerable(xs).orderBy().lastOrDefault(), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().lastOrDefault(x => x % 2 === 0), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().lastOrDefault(x => x % 2 === 1), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).lastOrDefault(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).lastOrDefault(), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).lastOrDefault(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).lastOrDefault(), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(999).lastOrDefault(), null);
        assert.strictEqual(new Enumerable([]).orderBy().lastOrDefault(), null);
        assert.strictEqual(new Enumerable([]).orderBy().lastOrDefault(x => x % 2 === 0), null);
        assert.strictEqual(new Enumerable([]).orderBy().lastOrDefault(x => x % 2 === 1), null);

        assert.strictEqual(new Enumerable(xs).orderBy().elementAt(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAt(1), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAt(2), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAt(3), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAt(4), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAt(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAt(1), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).elementAt(0), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).elementAt(1), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).elementAt(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).elementAt(0), 2);

        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(1), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(2), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(3), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(4), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAtOrDefault(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAtOrDefault(1), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).elementAtOrDefault(0), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).elementAtOrDefault(1), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).elementAtOrDefault(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).elementAtOrDefault(0), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(5), null);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAtOrDefault(4), null);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).elementAtOrDefault(2), null);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).elementAtOrDefault(2), null);

        assert.throws(() => new Enumerable([]).orderBy().first());
        assert.throws(() => new Enumerable([]).orderBy().last());
        assert.throws(() => new Enumerable(xs).orderBy().first(x => false));
        assert.throws(() => new Enumerable(xs).orderBy().last(x => false));
        assert.throws(() => new Enumerable(xs).orderBy().skip(5).first());
        assert.throws(() => new Enumerable(xs).orderBy().skip(5).last());
        assert.throws(() => new Enumerable(xs).orderBy().elementAt(5));
        assert.throws(() => new Enumerable(xs).orderBy().take(2).elementAt(4));
        assert.throws(() => new Enumerable(xs).orderBy().take(2).skip(2).elementAt(2));
        assert.throws(() => new Enumerable(xs).orderBy().skip(2).take(2).elementAt(2));
    });
});
