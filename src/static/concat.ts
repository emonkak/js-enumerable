export default function* concat<TSource>(...sources: Iterable<TSource>[]): Iterable<TSource> {
    for (const source of sources) {
        yield* source
    }
}
