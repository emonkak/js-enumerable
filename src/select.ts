export default function* select<TSource, TResult>(this: Iterable<TSource>, selector: (element: TSource) => TResult): Iterable<TResult> {
    for (const element of this) {
        yield selector(element);
    }
}
