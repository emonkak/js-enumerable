export default function* _catch<TSource, TException>(handler: (exception: TException) => Iterable<TSource>): Iterable<TSource> {
    try {
        yield* this;
    } catch (error) {
        yield* handler(error);
    }
}
