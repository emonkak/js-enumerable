import toLookupFn from '../toLookup';

export default function toLookup<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Iterable<TSource>) => Map<TKey, TSource[]>;
export default function toLookup<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): (source: Iterable<TSource>) => Map<TKey, TElement[]>;
export default function toLookup<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): (source: Iterable<TSource>) => Map<TKey, TElement[]> {
    return (source) => toLookupFn.call(source, keySelector, elementSelector);
}
