import forEach from '../forEach';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.forEach = forEach;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        forEach: typeof forEach;
    }
}
