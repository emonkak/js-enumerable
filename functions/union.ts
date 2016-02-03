export default function* union<TSource>(second: Iterable<TSource>): Iterable<TSource> {
    const set = new Set<TSource>()
    for (const element of this as Iterable<TSource>) {
        if (set.has(element)) {
            set.add(element)
            yield element
        }
    }
    for (const element of second) {
        if (set.has(element)) {
            set.add(element)
            yield element
        }
    }
}
