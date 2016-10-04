import catchFn from '../../static/catch';
import { Enumerable } from '../../internal/Enumerable';

function _catch<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource> {
    return new Enumerable(catchFn(...sources));
}

Enumerable._catch = _catch;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function _catch<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource>;
    }
}
