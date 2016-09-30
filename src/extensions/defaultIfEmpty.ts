import defaultIfEmpty from '../lifted/defaultIfEmpty';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.defaultIfEmpty = defaultIfEmpty;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        defaultIfEmpty: typeof defaultIfEmpty;
    }
}
