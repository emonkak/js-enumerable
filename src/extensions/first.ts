import first from '../first';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.first = first;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        first: typeof first;
    }
}
