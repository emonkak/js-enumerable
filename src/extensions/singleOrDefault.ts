import singleOrDefaultFn from '../singleOrDefault';
import { Enumerable } from '../internal/Enumerable';

function singleOrDefault<TSource>(this: Enumerable<TSource>, predicate?: (element: TSource) => boolean, defaultValue: TSource = null): TSource {
    return singleOrDefaultFn.call(this.source, predicate, defaultValue);
}

Enumerable.prototype.singleOrDefault = singleOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        singleOrDefault(predicate?: (element: TSource) => boolean, defaultValue?: TSource): TSource;
    }
}
