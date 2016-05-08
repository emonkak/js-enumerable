import ILiftable from '../internal/ILiftable';
import zipFn from '../zip';

export default function zip<TFirst, TSecond, TResult>(this: ILiftable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): ILiftable<TResult> {
    return this.lift<TResult>(zipFn.call(this, second, resultSelector));
}
