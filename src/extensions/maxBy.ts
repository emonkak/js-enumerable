import maxBy from '../maxBy';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.maxBy = maxBy;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        maxBy: typeof maxBy;
    }
}
