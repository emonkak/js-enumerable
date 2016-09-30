import minBy from '../minBy';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.minBy = minBy;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        minBy: typeof minBy;
    }
}
