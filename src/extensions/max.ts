import maxFn from '../max';
import { Enumerable } from '../internal/Enumerable';

function max<TSource>(this: Enumerable<TSource>, selector?: (element: TSource) => number): number {
    return maxFn.call(this.source, selector);
}

Enumerable.prototype.max = max;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        max(selector?: (element: TSource) => number): number;
    }
}
