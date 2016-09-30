import where from '../lifted/where';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.where = where;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        where: typeof where;
    }
}
