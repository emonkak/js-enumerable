export default function* skipWhile<TSource>(predicate: (element: TSource) => boolean): Iterable<TSource> {
    let skipped = false;
    for (const element of this as Iterable<TSource>) {
        if (skipped || !predicate(element)) {
            yield element;
            skipped = true;
        }
    }
}
