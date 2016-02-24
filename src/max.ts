export default function max<TSource>(selector: (element: TSource) => number): number {
    if (selector == null) selector = (x) => x as any
    let max = -Infinity
    for (const element of this as Iterable<TSource>) {
        const value = selector(element)
        if (max < value) max = value
    }
    return max
}
