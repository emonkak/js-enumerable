export default function sum<TSource>(selector?: (element: TSource) => number): number {
    if (selector == null) selector = (x) => x as any
    let sum = 0
    for (const element of this as Iterable<TSource>) {
        sum += selector(element)
    }
    return sum
}
