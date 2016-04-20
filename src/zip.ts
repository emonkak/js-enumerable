import staticZip from './static/zip';

export default function* zip<TFirst, TSecond, TResult>(
    this: Iterable<TFirst>,
    second: Iterable<TSecond>,
    resultSelector: (first: TFirst, second: TSecond) => TResult
): Iterable<TResult> {
    yield* staticZip(this, second, resultSelector);
}
