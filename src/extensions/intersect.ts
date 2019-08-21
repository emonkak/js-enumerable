import intersectFn from '../intersect';
import { Enumerable } from '../internal/Enumerable';

function intersect<TSource>(this: Enumerable<TSource>, second: Iterable<TSource>): Enumerable<TSource> {
    return new Enumerable<TSource>(intersectFn.call(this.source, second));
}

Enumerable.prototype.intersect = intersect;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        intersect(second: Iterable<TSource>): Enumerable<TSource>;
    }
}
