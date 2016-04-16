export default function* intersect<TSource>(second: Iterable<TSource>): Iterable<TSource> {
    const set = new Set(second);

    for (const element of this as Iterable<TSource>) {
        if (set.has(element)) {
            yield element;
        }
    }
}
