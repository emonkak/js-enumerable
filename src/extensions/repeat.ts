import repeat from '../lifted/repeat';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.repeat = repeat;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        repeat: typeof repeat;
    }
}
