import skipLastFn from '../skipLast';
import { Enumerable } from '../internal/Enumerable';

function skipLast<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
    return this.lift<TSource>(skipLastFn.call(this, count));
}

Enumerable.prototype.skipLast = skipLast;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        skipLast(count: number): Enumerable<TSource>;
    }
}
