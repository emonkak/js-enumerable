import union from '../lifted/union';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.union = union;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        union: typeof union;
    }
}
