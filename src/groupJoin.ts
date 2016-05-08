import toLookup from './toLookup';

export default function* groupJoin<TOuter, TInner, TKey, TResult>(this: Iterable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner[]) => TResult): Iterable<TResult> {
    const lookup = toLookup.call(inner, innerKeySelector);

    for (const outerElement of this) {
        const key = outerKeySelector(outerElement);
        if (lookup.has(key)) {
            yield resultSelector(outerElement, lookup.get(key));
        } else {
            yield resultSelector(outerElement, []);
        }
    }
}
