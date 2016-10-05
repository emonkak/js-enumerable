import toDictionaryFn from '../toDictionary';
import { Enumerable } from '../internal/Enumerable';

function toDictionary<TSource, TKey>(this: Enumerable<TSource>, keySelector?: (element: TSource) => TKey): Map<TKey, TSource>;
function toDictionary<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector?: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): Map<TKey, TElement> {
    return toDictionaryFn.call(this.source, keySelector, elementSelector);
}

Enumerable.prototype.toDictionary = toDictionary;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        toDictionary<TKey>(keySelector?: (element: TSource) => TKey): Map<TKey, TSource>;
        toDictionary<TKey, TElement>(keySelector?: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): Map<TKey, TElement>;
    }
}
