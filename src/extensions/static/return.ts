import returnFn from '../../static/return';
import { Enumerable } from '../../internal/Enumerable';

function _return<TSource>(element: TSource): Enumerable<TSource> {
    return new Enumerable(returnFn(element));
}

Enumerable._return = _return;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function _return<TSource>(element: TSource): Enumerable<TSource>;
    }
}
