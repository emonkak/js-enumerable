export default function* where<TSource>(this: Iterable<TSource>, predicate: (item: TSource) => boolean): Iterable<TSource> {
    for (const element of this) {
        if (predicate(element)) {
            yield element;
        }
    }
}
