import max from '../max';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.max = max;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        max(selector?: (element: TSource) => number): number;
    }
}
