import takeFn from '../take';
import { Enumerable } from '../internal/Enumerable';

function take<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
    return new Enumerable<TSource>(takeFn.call(this.source, count));
}

Enumerable.prototype.take = take;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        take(count: number): Enumerable<TSource>;
    }
}
