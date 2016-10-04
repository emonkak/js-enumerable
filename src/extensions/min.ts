import min from '../min';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.min = min;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        min(selector?: (element: TSource) => number): number;
    }
}
