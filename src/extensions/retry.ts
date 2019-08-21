import retryFn from '../retry';
import { Enumerable } from '../internal/Enumerable';

function retry<TSource>(this: Enumerable<TSource>, retryCount?: number): Enumerable<TSource> {
    return new Enumerable<TSource>(retryFn.call(this.source, retryCount));
}

Enumerable.prototype.retry = retry;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        retry(retryCount?: number): Enumerable<TSource>;
    }
}
