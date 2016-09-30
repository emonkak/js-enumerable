import orderByDescending from '../lifted/orderByDescending';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.orderByDescending = orderByDescending;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        orderByDescending: typeof orderByDescending;
    }
}
