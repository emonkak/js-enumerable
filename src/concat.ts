export default function* concat<TSource>(this: Iterable<TSource>, ...sources: Iterable<TSource>[]): Iterable<TSource> {
    yield* this;
    for (const source of sources) {
        yield* source;
    }
}
