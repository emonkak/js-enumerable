import skipLast from '../lifted/skipLast';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.skipLast = skipLast;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        skipLast: typeof skipLast;
    }
}
