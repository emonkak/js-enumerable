export default function* union<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource> {
    const set = new Set<TSource>(this);
    for (const element of second) {
        if (set.has(element)) {
            yield element;
        }
    }
}
