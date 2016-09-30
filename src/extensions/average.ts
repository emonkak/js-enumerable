import average from '../average';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.average = average;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        average: typeof average;
    }
}
