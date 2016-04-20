export default function* doWhile<TSource>(this: Iterable<TSource>, condition: () => boolean): Iterable<TSource> {
    do {
        yield* this;
    } while (condition());
}
