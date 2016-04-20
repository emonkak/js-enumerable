export default function* skipWhile<TSource>(this: Iterable<TSource>, predicate: (element: TSource) => boolean): Iterable<TSource> {
    let skipped = false;
    for (const element of this) {
        if (skipped || !predicate(element)) {
            yield element;
            skipped = true;
        }
    }
}
