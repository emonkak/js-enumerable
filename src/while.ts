export default function* _while<TSource>(condition: () => boolean): Iterable<TSource> {
    while (condition()) {
        yield* this
    }
}
