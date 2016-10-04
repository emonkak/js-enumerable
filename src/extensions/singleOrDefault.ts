import singleOrDefault from '../singleOrDefault';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.singleOrDefault = singleOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        singleOrDefault(predicate?: (element: TSource) => boolean, defaultValue?: TSource): TSource;
    }
}
