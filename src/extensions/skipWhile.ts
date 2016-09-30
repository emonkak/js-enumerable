import skipWhile from '../lifted/skipWhile';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.skipWhile = skipWhile;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        skipWhile: typeof skipWhile;
    }
}
