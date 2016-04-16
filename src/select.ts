export default function* select<TSource, TResult>(selector: (element: TSource) => TResult): Iterable<TResult> {
    for (const element of this as Iterable<TSource>) {
        yield selector(element);
    }
}
