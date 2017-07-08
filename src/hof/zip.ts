import zipFn from '../zip';
import { Enumerable } from '../internal/Enumerable';

export default function zip<TFirst, TSecond, TResult>(second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): (source: Enumerable<TFirst>) => Enumerable<TResult> {
    return (source) => source.lift<TResult>(zipFn.call(source.source, second, resultSelector));
}
