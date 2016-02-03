export default function* groupJoin<TOuter, TInner, TKey, TResult>(
    inner: Iterable<TInner>,
    outerKeySelector: (element: TOuter) => TKey,
    innerKeySelector: (element: TInner) => TKey,
    resultSelector: (outer: TOuter, inner: TInner[]) => TResult
): Iterable<TResult> {
    const lookup = createLookup(inner, innerKeySelector)

    for (const element of this as Iterable<TOuter>) {
        const key = outerKeySelector(element)
        if (lookup.has(key)) {
            yield resultSelector(element, lookup.get(key))
        } else {
            yield resultSelector(element, [])
        }
    }
}

function createLookup<TInner, TKey>(inner: Iterable<TInner>, innerKeySelector: (element: TInner) => TKey): Map<TKey, TInner[]> {
    const lookup = new Map<TKey, TInner[]>()

    for (const element of inner) {
        const key = innerKeySelector(element)
        if (lookup.has(key)) {
            lookup.get(key).push(element)
        } else {
            lookup.set(key, [element])
        }
    }

    return lookup
}
