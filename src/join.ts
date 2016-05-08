import toLookup from './toLookup';

export default function* join<TOuter, TInner, TKey, TResult>(this: Iterable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner) => TResult): Iterable<TResult> {
    const lookup = toLookup.call(inner, innerKeySelector);

    for (const outerElement of this) {
        const key = outerKeySelector(outerElement);
        if (lookup.has(key)) {
            for (const innerElement of lookup.get(key)) {
                yield resultSelector(outerElement, innerElement);
            }
        }
    }
}
