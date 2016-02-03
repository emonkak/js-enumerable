export default function groupBy<TSource, TKey>(keySelector: (element: TSource) => TKey): Iterable<[TKey, TSource[]]> {
    const lookup = new Map<TKey, TSource[]>()

    for (const element of this as Iterable<TSource>) {
        const key = keySelector(element)
        if (lookup.has(key)) {
            lookup.get(key).push(element)
        } else {
            lookup.set(key, [element])
        }
    }

    return lookup
}
