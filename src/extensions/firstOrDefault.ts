import firstOrDefault from '../firstOrDefault';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.firstOrDefault = firstOrDefault;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        firstOrDefault: typeof firstOrDefault;
    }
}
