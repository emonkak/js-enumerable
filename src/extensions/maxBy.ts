import maxByFn from '../maxBy';
import { Enumerable } from '../internal/Enumerable';

function maxBy<TSource, TKey>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey): Enumerable<TSource> {
    return this.lift<TSource>(maxByFn.call(this.source, keySelector));
}

Enumerable.prototype.maxBy = maxBy;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        maxBy<TKey>(keySelector: (element: TSource) => TKey): Enumerable<TSource>;
    }
}
