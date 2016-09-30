import join from '../lifted/join';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.join = join;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        join: typeof join;
    }
}
