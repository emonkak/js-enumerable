import concatFn from '../concat';
import { Enumerable } from '../internal/Enumerable';

function concat<TSource>(this: Enumerable<TSource>, second: Iterable<TSource>): Enumerable<TSource> {
    return new Enumerable<TSource>(concatFn.call(this.source, second));
}

Enumerable.prototype.concat = concat;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        concat(second: Iterable<TSource>): Enumerable<TSource>;
    }
}
