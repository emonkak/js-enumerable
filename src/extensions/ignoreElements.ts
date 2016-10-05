import ignoreElementsFn from '../ignoreElements';
import { Enumerable } from '../internal/Enumerable';

function ignoreElements<TSource>(this: Enumerable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(ignoreElementsFn.call(this.source));
}

Enumerable.prototype.ignoreElements = ignoreElements;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        ignoreElements(): Enumerable<TSource>;
    }
}
