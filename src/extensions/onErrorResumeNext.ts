import onErrorResumeNextFn from '../onErrorResumeNext';
import { Enumerable } from '../internal/Enumerable';

function onErrorResumeNext<TSource>(this: Enumerable<TSource>, second: Iterable<TSource>[]): Enumerable<TSource> {
    return this.lift<TSource>(onErrorResumeNextFn.call(this.source, second));
}

Enumerable.prototype.onErrorResumeNext = onErrorResumeNext;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        onErrorResumeNext(second: Iterable<TSource>): Enumerable<TSource>;
    }
}
