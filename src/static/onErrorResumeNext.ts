export default function* onErrorResumeNext<TSource>(...sources: Iterable<TSource>[]) {
    for (const source of sources) {
        try {
            yield* source;
        } catch (error) {
        }
    }
}
