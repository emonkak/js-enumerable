import max from '../max';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.max = max;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        max: typeof max;
    }
}
