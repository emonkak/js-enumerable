import onErrorResumeNextFn from '../../static/onErrorResumeNext';
import { Enumerable } from '../../internal/Enumerable';

function onErrorResumeNext<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource> {
    return new Enumerable(onErrorResumeNextFn(...sources));
}

Enumerable.onErrorResumeNext = onErrorResumeNext;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function onErrorResumeNext<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource>;
    }
}
