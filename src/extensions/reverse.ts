import reverseFn from '../reverse';
import { Enumerable } from '../internal/Enumerable';

function reverse<TSource>(this: Enumerable<TSource>): Enumerable<TSource> {
    return new Enumerable<TSource>(reverseFn.call(this.source));
}

Enumerable.prototype.reverse = reverse;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        reverse(): Enumerable<TSource>;
    }
}
