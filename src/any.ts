export default function any<TSource>(predicate?: (element: TSource) => boolean): boolean {
    if (predicate == null) predicate = (x) => !!x
    for (const element of this as Iterable<TSource>) {
        if (predicate(element)) return true;
    }
    return false
}
