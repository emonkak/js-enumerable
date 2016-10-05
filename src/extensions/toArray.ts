import toArrayFn from '../toArray';
import { Enumerable } from '../internal/Enumerable';

function toArray<TSource>(this: Enumerable<TSource>): TSource[] {
    return toArrayFn.call(this.source);
}

Enumerable.prototype.toArray = toArray;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        toArray(): TSource[];
    }
}
