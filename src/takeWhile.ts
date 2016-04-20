export default function* takeWhile<TSource>(this: Iterable<TSource>, predicate: (element: TSource) => boolean): Iterable<TSource> {
    for (const element of this) {
        if (!predicate(element)) break;
        yield element;
    }
}
