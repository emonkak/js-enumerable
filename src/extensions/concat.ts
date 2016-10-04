import concatFn from '../concat';
import { Enumerable } from '../internal/Enumerable';

function concat<TSource>(this: Enumerable<TSource>, ...sources: Iterable<TSource>[]): Enumerable<TSource> {
    return this.lift<TSource>(concatFn.apply(this, sources));
}

Enumerable.prototype.concat = concat;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        concat(...sources: Iterable<TSource>[]): Enumerable<TSource>;
    }
}
