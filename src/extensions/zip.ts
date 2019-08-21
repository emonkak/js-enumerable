import zipFn from '../zip';
import { Enumerable } from '../internal/Enumerable';

function zip<TFirst, TSecond, TResult>(this: Enumerable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): Enumerable<TResult> {
    return new Enumerable<TResult>(zipFn.call(this.source, second, resultSelector));
}

Enumerable.prototype.zip = zip;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        zip<TSecond, TResult>(second: Iterable<TSecond>, resultSelector: (first: TSource, second: TSecond) => TResult): Enumerable<TResult>;
    }
}
