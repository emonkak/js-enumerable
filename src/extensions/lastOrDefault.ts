import lastOrDefault from '../lastOrDefault';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.lastOrDefault = lastOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        lastOrDefault(predicate?: (value: TSource) => boolean, defaultValue?: TSource): TSource;
    }
}
