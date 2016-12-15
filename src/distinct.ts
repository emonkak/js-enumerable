export default function distinct<TSource>(this: Iterable<TSource>): Iterable<TSource>;
export default function* distinct<TSource, TKey>(this: Iterable<TSource>, keySelector?: (element: TSource) => TKey): Iterable<TSource> {
    if (keySelector == null) {
        keySelector = x => x as any;
    }
    const set = new Set<TKey>();
    for (const element of this) {
        const key = keySelector(element);
        if (!set.has(key)) {
            set.add(key);
            yield element;
        }
    }
}
