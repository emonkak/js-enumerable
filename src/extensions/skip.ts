import skipFn from '../skip';
import { Enumerable } from '../internal/Enumerable';

function skip<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
    return this.lift<TSource>(skipFn.call(this, count));
}

Enumerable.prototype.skip = skip;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        skip(count: number): Enumerable<TSource>;
    }
}
