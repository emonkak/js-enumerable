import unionFn from '../union';
import { Enumerable } from '../internal/Enumerable';

function union<TSource>(this: Enumerable<TSource>, second: Iterable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(unionFn.call(this, second));
}

Enumerable.prototype.union = union;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        union(second: Iterable<TSource>): Enumerable<TSource>;
    }
}
