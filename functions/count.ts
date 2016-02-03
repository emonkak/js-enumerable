export default function count<TSource>(selector?: (element: TSource) => number): number {
    if ('length' in this) return this.length
    let count = 0
    for (const element of this as Iterable<TSource>) {
        count++
    }
    return count
}
