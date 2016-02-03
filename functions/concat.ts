export default function* concat<TSource>(second: Iterable<TSource>): Iterable<TSource> {
    yield* this
    yield* second
}
