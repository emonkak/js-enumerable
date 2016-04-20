export default function* onErrorResumeNext<TSource>(this: Iterable<TSource>, ...sources: Iterable<TSource>[]): Iterable<TSource> {
    try {
        yield* this;
    } catch (error) {
    }
    for (const source of sources) {
        yield* source;
    }
}
