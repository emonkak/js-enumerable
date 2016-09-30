import staticZipFn from '../../static/zip';
import { Enumerable } from '../../Enumerable';

export default function staticZip<TFirst, TSecond, TResult>(first: Iterable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): Enumerable<TResult> {
    return new Enumerable(staticZipFn(first, second, resultSelector));
}
