export default function* _while<TSource>(this: Iterable<TSource>, condition: () => boolean): Iterable<TSource> {
    while (condition()) {
        yield* this;
    }
}
