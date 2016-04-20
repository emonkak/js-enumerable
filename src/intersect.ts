export default function* intersect<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource> {
    const set = new Set(second);

    for (const element of this) {
        if (set.has(element)) {
            yield element;
        }
    }
}
