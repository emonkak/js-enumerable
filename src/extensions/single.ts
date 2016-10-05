import singleFn from '../single';
import { Enumerable } from '../internal/Enumerable';

function single<TSource>(this: Enumerable<TSource>, predicate?: (element: TSource) => boolean): TSource {
    return singleFn.call(this.source, predicate);
}

Enumerable.prototype.single = single;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        single(predicate?: (element: TSource) => boolean): TSource;
    }
}
