export default function* union<TSource>(second: Iterable<TSource>): Iterable<TSource> {
    const set = new Set<TSource>(this as Iterable<TSource>)
    for (const element of second) {
        if (set.has(element)) {
            yield element
        }
    }
}
