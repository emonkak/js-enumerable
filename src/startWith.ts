export default function* startWith<TSource>(this: Iterable<TSource>, ...elements: TSource[]): Iterable<TSource> {
    yield* elements;
    yield* this;
}
