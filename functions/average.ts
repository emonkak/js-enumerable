export default function average<TSource>(selector?: (element: TSource) => number): number {
    if (!selector) selector = (x) => x as any
    let sum = 0
    let count = 0
    for (const element of this as Iterable<TSource>) {
        sum += selector(element)
        count++
    }
    return sum / count
}
