import memoizeFn from '../memoize';
import { Enumerable } from '../internal/Enumerable';

function memoize<TSource>(this: Enumerable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(memoizeFn.call(this));
}

Enumerable.prototype.memoize = memoize;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        memoize(): Enumerable<TSource>;
    }
}
