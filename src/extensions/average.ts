import average from '../average';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.average = average;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        average(selector?: (element: TSource) => number): number;
    }
}
