export default function min<TSource>(this: Iterable<TSource>, selector: (element: TSource) => number): number {
    if (selector == null) selector = (x) => x as any;
    let min = Infinity;
    for (const element of this) {
        const value = selector(element);
        if (min > value) min = value;
    }
    return min;
}
