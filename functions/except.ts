export default function* except<TSource>(second: Iterable<TSource>): Iterable<TSource> {
    const set = new Set<TSource>(second)

    for (const element of this as Iterable<TSource>) {
        if (!set.has(element)) {
            set.add(element)
            yield element
        }
    }
}
