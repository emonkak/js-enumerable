export default function toDictionary<TSource, TKey>(this: Iterable<TSource>, keySelector: (element: TSource) => TKey): Map<TKey, TSource>;
export default function toDictionary<TSource, TKey, TElement>(this: Iterable<TSource>, keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): Map<TKey, TElement>;
export default function toDictionary<TSource, TKey, TElement>(this: Iterable<TSource>, keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): Map<TKey, TElement> {
    if (elementSelector == null) {
        elementSelector = x => x as any;
    }

    const dict = new Map<TKey, TElement>();

    for (const element of this) {
        dict.set(keySelector(element), elementSelector(element));
    }

    return dict;
}
