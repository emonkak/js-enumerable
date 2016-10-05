import bufferFn from '../buffer';
import { Enumerable } from '../internal/Enumerable';

function buffer<TSource>(this: Enumerable<TSource>, count: number, skip?: number): Enumerable<TSource[]> {
    return this.lift<TSource[]>(bufferFn.call(this.source, count, skip));
}

Enumerable.prototype.buffer = buffer;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        buffer(count: number, skip?: number): Enumerable<TSource[]>;
    }
}
