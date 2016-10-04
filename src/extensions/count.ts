import count from '../count';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.count = count;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        count(predicate?: (item: TSource) => boolean): number;
    }
}
