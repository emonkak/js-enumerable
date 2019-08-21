import skipFn from '../skip';
import { Enumerable } from '../internal/Enumerable';

function skip<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
    return new Enumerable<TSource>(skipFn.call(this.source, count));
}

Enumerable.prototype.skip = skip;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        skip(count: number): Enumerable<TSource>;
    }
}
