export default function* _finally<TSource>(this: Iterable<TSource>, finallyAction: () => void): Iterable<TSource> {
    try {
        yield* this;
    } finally {
        finallyAction();
    }
}
