export default function all<TSource>(this: Iterable<TSource>, predicate?: (element: TSource) => boolean): boolean {
    if (predicate == null) predicate = (x) => !!x;
    for (const element of this) {
        if (!predicate(element)) return false;
    }
    return true;
}
