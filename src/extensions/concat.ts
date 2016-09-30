import concat from '../lifted/concat';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.concat = concat;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        concat: typeof concat;
    }
}
