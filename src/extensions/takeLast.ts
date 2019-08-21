import takeLastFn from '../takeLast';
import { Enumerable } from '../internal/Enumerable';

function takeLast<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
    return new Enumerable<TSource>(takeLastFn.call(this.source, count));
}

Enumerable.prototype.takeLast = takeLast;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        takeLast(count: number): Enumerable<TSource>;
    }
}
