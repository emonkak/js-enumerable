export default function* takeWhile<TSource>(predicate: (element: TSource) => boolean): Iterable<TSource> {
    for (const element of this as Iterable<TSource>) {
        if (!predicate(element)) break
        yield element
    }
}
