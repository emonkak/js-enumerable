export default function* onErrorResumeNext<TSource>(...sources: Iterable<TSource>[]): Iterable<TSource> {
    try {
        yield* this;
    } catch (error) {
    }
    for (const source of sources) {
        yield* source;
    }
}
