export default function* selectMany<TSource, TResult>(this: Iterable<TSource>, collectionSelector: (element: TSource) => Iterable<TResult>): Iterable<TResult> {
    for (const element of this) {
        yield* collectionSelector(element);
    }
}
