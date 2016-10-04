import toArray from '../toArray';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.toArray = toArray;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        toArray(): TSource[];
    }
}
