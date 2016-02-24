export default function* doWhile<TSource>(condition: () => boolean): Iterable<TSource> {
    do {
        yield* this
    } while (condition())
}
