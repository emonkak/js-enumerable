export default function count<TSource>(this: Iterable<TSource>, predicate?: (item: TSource) => boolean): number {
    if (predicate) {
        let count = 0;
        for (const element of this) {
            if (predicate(element)) count++;
        }
        return count;
    } else {
        if (Array.isArray(this)) return (this as Array<TSource>).length;
        let count = 0;
        for (const element of this) {
            count++;
        }
        return count;
    }
}
