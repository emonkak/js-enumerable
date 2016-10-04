import zipFn from '../../static/zip';
import { Enumerable } from '../../internal/Enumerable';

function zip<TFirst, TSecond, TResult>(first: Iterable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): Enumerable<TResult> {
    return new Enumerable(zipFn(first, second, resultSelector));
}

Enumerable.zip = zip;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function zip<TFirst, TSecond, TResult>(first: Iterable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): Enumerable<TResult>;
    }
}
