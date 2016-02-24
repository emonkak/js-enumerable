export default function toMap<TSource, TKey>(keySelector: (element: TSource) => TKey): Map<TKey, TSource>
export default function toMap<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): Map<TKey, TElement> {
    if (elementSelector == null) elementSelector = x => x as any
    const dict = new Map<TKey, TElement>()
    for (const element of this as Iterable<TSource>) {
        dict.set(keySelector(element), elementSelector(element))
    }
    return dict
}
