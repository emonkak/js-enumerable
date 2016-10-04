import toDictionary from '../toDictionary';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.toDictionary = toDictionary;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        toDictionary<TKey>(keySelector?: (element: TSource) => TKey): Map<TKey, TSource>;
        toDictionary<TKey, TElement>(keySelector?: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): Map<TKey, TElement>;
    }
}
