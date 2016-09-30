import aggregate from '../aggregate';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.aggregate = aggregate;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        aggregate: typeof aggregate;
    }
}
