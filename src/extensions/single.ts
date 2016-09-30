import single from '../single';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.single = single;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        single: typeof single;
    }
}
