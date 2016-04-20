export default function* except<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource> {
    const set = new Set<TSource>(second);

    for (const element of this) {
        if (!set.has(element)) {
            set.add(element);
            yield element;
        }
    }
}
