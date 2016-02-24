export default function count<TSource>(predicate?: (item: TSource) => boolean): number {
    if (predicate) {
        let count = 0
        for (const element of this as Iterable<TSource>) {
            if (predicate(element)) count++
        }
        return count
    } else {
        if ('length' in this) return this.length
        let count = 0
        for (const element of this as Iterable<TSource>) {
            count++
        }
        return count
    }
}
