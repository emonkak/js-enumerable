import maxBy from '../maxBy';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.maxBy = maxBy;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        maxBy<TKey>(keySelector?: (element: TSource) => TKey): TSource[];
    }
}
