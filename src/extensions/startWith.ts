import startWith from '../lifted/startWith';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.startWith = startWith;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        startWith: typeof startWith;
    }
}
