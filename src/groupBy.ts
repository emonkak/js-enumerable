import toLookup from './toLookup';

export default function groupBy<TSource, TKey>(keySelector: (element: TSource) => TKey): Iterable<[TKey, TSource]>;
export default function groupBy<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): Iterable<[TKey, TElement]>;
export default function* groupBy<TSource, TKey, TElement, TResult>(
    keySelector: (element: TSource) => TKey,
    elementSelector?: (element: TSource) => TElement,
    resultSelector?: (key: TKey, elements: TElement[]) => TResult
): Iterable<TResult> {
    if (elementSelector == null) elementSelector = x => x as any;
    if (resultSelector == null) resultSelector = (k, vs) => [k, vs] as any;

    for (const [key, values] of toLookup.call(this, keySelector, elementSelector)) {
        yield resultSelector(key, values);
    }
}
