import onErrorResumeNextFn from '../onErrorResumeNext';
import { Enumerable } from '../internal/Enumerable';

function onErrorResumeNext<TSource>(this: Enumerable<TSource>, ...sources: Iterable<TSource>[]): Enumerable<TSource> {
    return this.lift<TSource>(onErrorResumeNextFn.apply(this, sources));
}

Enumerable.prototype.onErrorResumeNext = onErrorResumeNext;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        onErrorResumeNext(...sources: Iterable<TSource>[]): Enumerable<TSource>;
    }
}
