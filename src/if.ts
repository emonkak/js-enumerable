export default function* _if<TResult>(condition: () => boolean, thenSource: Iterable<TResult>, elseSource: Iterable<TResult>): Iterable<TResult> {
    yield* condition() ? thenSource : elseSource
}
