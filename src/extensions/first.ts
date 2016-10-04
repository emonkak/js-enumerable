import first from '../first';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.first = first;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        first(predicate?: (element: TSource) => boolean): TSource;
    }
}
