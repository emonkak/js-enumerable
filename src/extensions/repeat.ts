import repeatFn from '../repeat';
import { Enumerable } from '../internal/Enumerable';

function repeat<TSource>(this: Enumerable<TSource>, count?: number): Enumerable<TSource> {
    return this.lift<TSource>(repeatFn.call(this, count));
}

Enumerable.prototype.repeat = repeat;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        repeat(count?: number): Enumerable<TSource>;
    }
}
