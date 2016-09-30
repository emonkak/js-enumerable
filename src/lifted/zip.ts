import { Enumerable } from '../Enumerable';
import zipFn from '../zip';

export default function zip<TFirst, TSecond, TResult>(this: Enumerable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): Enumerable<TResult> {
    return this.lift<TResult>(zipFn.call(this, second, resultSelector));
}
