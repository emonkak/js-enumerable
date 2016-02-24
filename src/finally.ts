export default function* _finally<TSource>(finallyAction: () => void): Iterable<TSource> {
    try {
        yield* this
    } finally {
        finallyAction()
    }
}
