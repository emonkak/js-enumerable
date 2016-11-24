export default function* concat<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource> {
    yield* this;
    yield* second;
}
