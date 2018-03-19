import toDictionaryFn from '../toDictionary';

export default function toDictionary<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Iterable<TSource>) => Map<TKey, TSource>;
export default function toDictionary<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): (source: Iterable<TSource>) => Map<TKey, TElement>;
export default function toDictionary<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): (source: Iterable<TSource>) => Map<TKey, TElement> {
    return (source) => toDictionaryFn.call(source, keySelector, elementSelector);
}
