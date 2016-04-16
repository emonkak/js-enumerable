import toLookup from './toLookup';

export default function* join<TOuter, TInner, TKey, TResult>(
    inner: Iterable<TInner>,
    outerKeySelector: (element: TOuter) => TKey,
    innerKeySelector: (element: TInner) => TKey,
    resultSelector: (outer: TOuter, inner: TInner) => TResult
): Iterable<TResult> {
    const lookup = toLookup.call(inner, innerKeySelector);

    for (const element of this as Iterable<TOuter>) {
        const key = outerKeySelector(element);
        if (lookup.has(key)) {
            for (const inner of lookup.get(key)) {
                yield resultSelector(element, inner);
            }
        }
    }
}
