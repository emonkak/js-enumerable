import sum from '../sum';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.sum = sum;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        sum(selector?: (element: TSource) => number): number;
    }
}
