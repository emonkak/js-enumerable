import firstOrDefault from '../firstOrDefault';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.firstOrDefault = firstOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        firstOrDefault(predicate?: (element: TSource) => boolean, defaultValue?: TSource): TSource;
    }
}
