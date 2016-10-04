import toLookup from '../toLookup';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.toLookup = toLookup;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        toLookup<TKey>(keySelector?: (element: TSource) => TKey): Map<TKey, TSource[]>;
        toLookup<TKey, TElement>(keySelector?: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): Map<TKey, TElement[]>;
    }
}
