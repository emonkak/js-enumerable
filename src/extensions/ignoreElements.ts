import ignoreElements from '../lifted/ignoreElements';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.ignoreElements = ignoreElements;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        ignoreElements: typeof ignoreElements;
    }
}
