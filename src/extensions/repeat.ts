import repeatFn from '../repeat';
import { Enumerable } from '../internal/Enumerable';

function repeat<TSource>(this: Enumerable<TSource>, count?: number): Enumerable<TSource> {
    return new Enumerable<TSource>(repeatFn.call(this.source, count));
}

Enumerable.prototype.repeat = repeat;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        repeat(count?: number): Enumerable<TSource>;
    }
}
