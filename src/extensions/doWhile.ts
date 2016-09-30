import doWhile from '../lifted/doWhile';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.doWhile = doWhile;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        doWhile: typeof doWhile;
    }
}
