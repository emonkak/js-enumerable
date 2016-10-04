import minBy from '../minBy';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.minBy = minBy;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        minBy<TKey>(keySelector?: (element: TSource) => TKey): TSource[];
    }
}
