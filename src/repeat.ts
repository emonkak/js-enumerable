export default function* repeat<TSource>(count?: number): Iterable<TSource> {
    if (count == null)  {
        for (;;) {
            yield* this as Iterable<TSource>;
        }
    } else {
        for (let i = count; i > 0; i--) {
            yield* this as Iterable<TSource>;
        }
    }
}
