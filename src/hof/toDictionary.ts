import toDictionaryFn from '../toDictionary';
import { Enumerable } from '../internal/Enumerable';

export default function toDictionary<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Enumerable<TSource>) => Map<TKey, TSource>;
export default function toDictionary<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): (source: Enumerable<TSource>) => Map<TKey, TElement>;
export default function toDictionary<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): (source: Enumerable<TSource>) => Map<TKey, TElement> {
    return (source) => toDictionaryFn.call(source, keySelector, elementSelector);
}
