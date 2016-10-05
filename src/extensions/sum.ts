import sumFn from '../sum';
import { Enumerable } from '../internal/Enumerable';

function sum<TSource>(this: Enumerable<TSource>, selector?: (element: TSource) => number): number {
    return sumFn.call(this.source, selector);
}

Enumerable.prototype.sum = sum;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        sum(selector?: (element: TSource) => number): number;
    }
}

