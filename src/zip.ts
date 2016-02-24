import staticZip from './static/zip'

export default function* zip<TFirst, TSecond, TResult>(
    second: Iterable<TSecond>,
    resultSelector: (first: TFirst, second: TSecond) => TResult
): Iterable<TResult> {
    yield* staticZip(this as Iterable<TFirst>, second, resultSelector)
}
