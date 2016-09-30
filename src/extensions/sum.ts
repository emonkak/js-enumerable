import sum from '../sum';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.sum = sum;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        sum: typeof sum;
    }
}
