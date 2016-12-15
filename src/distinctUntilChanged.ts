export default function distinctUntilChanged<TSource>(this: Iterable<TSource>): Iterable<TSource>;
export default function* distinctUntilChanged<TSource, TKey>(this: Iterable<TSource>, keySelector?: (element: TSource) => TKey): Iterable<TSource> {
    if (keySelector == null) {
        keySelector = x => x as any;
    }
    let hasCurrentKey = false;
    let currentKey: TKey = null;
    for (const element of this) {
        const key = keySelector(element);
        if (!hasCurrentKey || currentKey !== key) {
            hasCurrentKey = true;
            currentKey = key;
            yield element;
        }
    }
}
