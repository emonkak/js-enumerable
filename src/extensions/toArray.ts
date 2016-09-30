import toArray from '../toArray';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.toArray = toArray;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        toArray: typeof toArray;
    }
}
