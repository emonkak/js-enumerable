export default function* startWith<TSource>(...elements: TSource[]): Iterable<TSource> {
    yield* elements;
    yield* this;
}
