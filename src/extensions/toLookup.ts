import toLookupFn from '../toLookup';
import { Enumerable } from '../internal/Enumerable';

function toLookup<TSource, TKey>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey): Map<TKey, TSource[]>;
function toLookup<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): Map<TKey, TElement[]>;
function toLookup<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): Map<TKey, TElement[]> {
    return toLookupFn.call(this.source, keySelector, elementSelector);
}

Enumerable.prototype.toLookup = toLookup;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        toLookup<TKey>(keySelector: (element: TSource) => TKey): Map<TKey, TSource[]>;
        toLookup<TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): Map<TKey, TElement[]>;
    }
}
