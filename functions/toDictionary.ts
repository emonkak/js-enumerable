export default function toDictionary<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): Map<TKey, TElement> {
    const dict = new Map<TKey, TElement>()
    for (const element of this as Iterable<TSource>) {
        dict.set(keySelector(element), elementSelector(element))
    }
    return dict
}
