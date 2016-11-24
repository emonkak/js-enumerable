export default function* onErrorResumeNext<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource> {
    try {
        yield* this;
    } catch (error) {
    }
    try {
        yield* second;
    } catch (error) {
    }
}
