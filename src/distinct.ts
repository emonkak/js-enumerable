export default function distinct<TSource>(): Iterable<TSource>
export default function* distinct<TSource, TKey>(keySelector?: (element: TSource) => TKey): Iterable<TSource> {
    if (keySelector == null) keySelector = x => x as any
    const set = new Set<TKey>()
    for (const element of this as Iterable<TSource>) {
        const key = keySelector(element)
        if (!set.has(key)) {
            set.add(key)
            yield element
        }
    }
}
