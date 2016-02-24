export default function* defer<TSource>(iterableFactory: () => Iterable<TSource>): Iterable<TSource> {
    yield* iterableFactory()
}
