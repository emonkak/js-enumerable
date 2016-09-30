import min from '../min';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.min = min;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        min: typeof min;
    }
}
