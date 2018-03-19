import zipFn from '../zip';

export default function zip<TFirst, TSecond, TResult>(second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): (source: Iterable<TFirst>) => Iterable<TResult> {
    return (source) => zipFn.call(source, second, resultSelector);
}
