export default function* distinct<TSource>(): Iterable<TSource> {
    const set = new Set<TSource>()

    for (const element of this as Iterable<TSource>) {
        if (!set.has(element)) {
            set.add(element)
            yield element
        }
    }
}
