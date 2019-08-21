import memoizeFn from '../memoize';
import { Enumerable } from '../internal/Enumerable';

function memoize<TSource>(this: Enumerable<TSource>): Enumerable<TSource> {
    return new Enumerable<TSource>(memoizeFn.call(this.source));
}

Enumerable.prototype.memoize = memoize;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        memoize(): Enumerable<TSource>;
    }
}
