import count from '../count';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.count = count;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        count: typeof count;
    }
}
