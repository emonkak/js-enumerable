import memoize from '../lifted/memoize';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.memoize = memoize;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        memoize: typeof memoize;
    }
}
