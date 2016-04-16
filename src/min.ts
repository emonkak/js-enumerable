export default function min<TSource>(selector: (element: TSource) => number): number {
    if (selector == null) selector = (x) => x as any;
    let min = Infinity;
    for (const element of this as Iterable<TSource>) {
        const value = selector(element);
        if (min > value) min = value;
    }
    return min;
}
