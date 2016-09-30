import select from '../lifted/select';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.select = select;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        select: typeof select;
    }
}
