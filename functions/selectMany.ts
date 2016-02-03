export default function* selectMany<TSource, TResult>(collectionSelector: (element: TSource) => Iterable<TResult>): Iterable<TResult> {
    for (const element of this as Iterable<TSource>) {
        yield* collectionSelector(element)
    }
}
