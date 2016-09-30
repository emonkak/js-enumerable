import isEmpty from '../isEmpty';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.isEmpty = isEmpty;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        isEmpty: typeof isEmpty;
    }
}
