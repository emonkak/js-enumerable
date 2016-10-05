import lastFn from '../last';
import { Enumerable } from '../internal/Enumerable';

function last<TSource>(this: Enumerable<TSource>, predicate?: (value: TSource) => boolean): TSource {
    return lastFn.call(this.source, predicate);
}

Enumerable.prototype.last = last;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        last(predicate?: (value: TSource) => boolean): TSource;
    }
}
