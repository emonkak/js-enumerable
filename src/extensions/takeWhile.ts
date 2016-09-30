import takeWhile from '../lifted/takeWhile';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.takeWhile = takeWhile;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        takeWhile: typeof takeWhile;
    }
}
