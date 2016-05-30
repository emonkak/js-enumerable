export default function* repeat<TSource>(this: Iterable<TSource>, count?: number): Iterable<TSource> {
    if (count == null)  {
        while (true) {
            yield* this;
        }
    } else {
        for (let i = count; i > 0; i--) {
            yield* this;
        }
    }
}
