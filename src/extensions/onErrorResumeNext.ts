import onErrorResumeNextFn from '../onErrorResumeNext';
import { Enumerable } from '../internal/Enumerable';

function onErrorResumeNext<TSource>(this: Enumerable<TSource>, second: Iterable<TSource>[]): Enumerable<TSource> {
    return new Enumerable<TSource>(onErrorResumeNextFn.call(this.source, second));
}

Enumerable.prototype.onErrorResumeNext = onErrorResumeNext;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        onErrorResumeNext(second: Iterable<TSource>): Enumerable<TSource>;
    }
}
