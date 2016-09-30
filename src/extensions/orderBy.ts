import orderBy from '../lifted/orderBy';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.orderBy = orderBy;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        orderBy: typeof orderBy;
    }
}
