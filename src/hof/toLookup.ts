import toLookupFn from '../toLookup';
import { Enumerable } from '../internal/Enumerable';

export default function toLookup<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Enumerable<TSource>) => Map<TKey, TSource[]>;
export default function toLookup<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): (source: Enumerable<TSource>) => Map<TKey, TElement[]>;
export default function toLookup<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): (source: Enumerable<TSource>) => Map<TKey, TElement[]> {
    return (source) => toLookupFn.call(source, keySelector, elementSelector);
}
