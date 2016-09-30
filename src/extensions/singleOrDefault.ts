import singleOrDefault from '../singleOrDefault';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.singleOrDefault = singleOrDefault;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        singleOrDefault: typeof singleOrDefault;
    }
}
