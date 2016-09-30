import all from '../all';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.all = all;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        all: typeof all;
    }
}
