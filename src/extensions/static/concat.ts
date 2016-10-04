import concatFn from '../../static/concat';
import { Enumerable } from '../../internal/Enumerable';

function concat<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource> {
    return new Enumerable(concatFn(...sources));
}

Enumerable.concat = concat;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function concat<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource>;
    }
}
