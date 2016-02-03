export default function min<TSource>(selector: (element: TSource) => number): number {
    if (!selector) selector = (x) => x as any
    let min = Number.MAX_VALUE
    for (const element of this as Iterable<TSource>) {
        const value = selector(element)
        if (min > value) min = value
    }
    return min
}
