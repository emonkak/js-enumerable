import averageFn from '../average';
import { Enumerable } from '../internal/Enumerable';

function average<TSource>(this: Enumerable<TSource>, selector?: (element: TSource) => number): number {
    return averageFn.call(this.source, selector);
}

Enumerable.prototype.average = average;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        average(selector?: (element: TSource) => number): number;
    }
}
