import lastOrDefaultFn from '../lastOrDefault';
import { Enumerable } from '../internal/Enumerable';

function lastOrDefault<TSource>(this: Enumerable<TSource>, predicate?: (value: TSource) => boolean, defaultValue: TSource = null): TSource {
    return lastOrDefaultFn.call(this.source, predicate, defaultValue);
}

Enumerable.prototype.lastOrDefault = lastOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        lastOrDefault(predicate?: (value: TSource) => boolean, defaultValue?: TSource): TSource;
    }
}
