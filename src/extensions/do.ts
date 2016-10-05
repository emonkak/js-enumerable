import doFn from '../do';
import { Enumerable } from '../internal/Enumerable';

function _do<TSource>(this: Enumerable<TSource>, action: (element: TSource) => void): Enumerable<TSource> {
    return this.lift<TSource>(doFn.call(this.source, action));
}

Enumerable.prototype.do = _do;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        do(action: (element: TSource) => void): Enumerable<TSource>;
    }
}
