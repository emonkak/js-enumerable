import IEnumerable from '../IEnumerable';
import zipFn from '../zip';

export default function zip<TFirst, TSecond, TResult>(this: IEnumerable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): IEnumerable<TResult> {
    return this.lift<TResult>(zipFn.call(this, second, resultSelector));
}
