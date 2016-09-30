import groupBy from '../lifted/groupBy';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.groupBy = groupBy;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        groupBy: typeof groupBy;
    }
}
