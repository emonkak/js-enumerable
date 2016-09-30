import intersect from '../lifted/intersect';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.intersect = intersect;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        intersect: typeof intersect;
    }
}
