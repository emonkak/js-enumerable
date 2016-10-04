import skipWhileFn from '../skipWhile';
import { Enumerable } from '../internal/Enumerable';

function skipWhile<TSource>(this: Enumerable<TSource>, predicate: (element: TSource) => boolean): Enumerable<TSource> {
    return this.lift<TSource>(skipWhileFn.call(this, predicate));
}

Enumerable.prototype.skipWhile = skipWhile;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        skipWhile(predicate: (element: TSource) => boolean): Enumerable<TSource>;
    }
}
