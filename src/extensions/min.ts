import minFn from '../min';
import { Enumerable } from '../internal/Enumerable';

function min<TSource>(this: Enumerable<TSource>, selector?: (element: TSource) => number): number {
    return minFn.call(this.source, selector);
}

Enumerable.prototype.min = min;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        min(selector?: (element: TSource) => number): number;
    }
}
