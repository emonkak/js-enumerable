import take from '../lifted/take';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.take = take;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        take: typeof take;
    }
}
