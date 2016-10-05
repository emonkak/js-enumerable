import firstOrDefaultFn from '../firstOrDefault';
import { Enumerable } from '../internal/Enumerable';

function firstOrDefault<TSource>(this: Enumerable<TSource>, predicate?: (element: TSource) => boolean, defaultValue: TSource = null): TSource {
    return firstOrDefaultFn.call(this.source, predicate, defaultValue);
}

Enumerable.prototype.firstOrDefault = firstOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        firstOrDefault(predicate?: (element: TSource) => boolean, defaultValue?: TSource): TSource;
    }
}
