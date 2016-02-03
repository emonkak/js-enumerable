export default function all<TSource>(predicate?: (element: TSource) => boolean): boolean {
    if (!predicate) predicate = (x) => !!x
    for (const element of this as Iterable<TSource>) {
        if (!predicate(element)) return false;
    }
    return true
}
