export default function distinctUntilChanged<TSource>(): Iterable<TSource>
export default function* distinctUntilChanged<TSource, TKey>(keySelector?: (element: TSource) => TKey): Iterable<TSource> {
    if (keySelector == null) keySelector = x => x as any
    let hasCurrentKey = false
    let currentKey: TKey = null
    for (const element of this as Iterable<TSource>) {
        const key = keySelector(element)
        if (!hasCurrentKey || currentKey !== key) {
            hasCurrentKey = true
            currentKey = key
            yield element
        }
    }
}
