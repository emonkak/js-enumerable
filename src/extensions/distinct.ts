import distinct from '../lifted/distinct';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.distinct = distinct;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        distinct: typeof distinct;
    }
}
