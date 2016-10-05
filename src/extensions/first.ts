import firstFn from '../first';
import { Enumerable } from '../internal/Enumerable';

function first<TSource>(this: Enumerable<TSource>, predicate?: (element: TSource) => boolean): TSource {
    return firstFn.call(this.source, predicate);
}

Enumerable.prototype.first = first;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        first(predicate?: (element: TSource) => boolean): TSource;
    }
}
