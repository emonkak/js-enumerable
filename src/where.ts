export default function* where<TSource>(predicate: (item: TSource) => boolean): Iterable<TSource> {
    for (const element of this as Iterable<TSource>) {
        if (predicate(element)) {
            yield element;
        }
    }
}
