import reverseFn from '../reverse';
import { Enumerable } from '../internal/Enumerable';

function reverse<TSource>(this: Enumerable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(reverseFn.call(this));
}

Enumerable.prototype.reverse = reverse;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        reverse(): Enumerable<TSource>;
    }
}
