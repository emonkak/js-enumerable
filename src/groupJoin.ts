import toLookup from './toLookup';

export default function* groupJoin<TOuter, TInner, TKey, TResult>(
    this: Iterable<TOuter>,
    inner: Iterable<TInner>,
    outerKeySelector: (element: TOuter) => TKey,
    innerKeySelector: (element: TInner) => TKey,
    resultSelector: (outer: TOuter, inner: TInner[]) => TResult
): Iterable<TResult> {
    const lookup = toLookup.call(inner, innerKeySelector);

    for (const element of this) {
        const key = outerKeySelector(element);
        if (lookup.has(key)) {
            yield resultSelector(element, lookup.get(key));
        } else {
            yield resultSelector(element, []);
        }
    }
}
