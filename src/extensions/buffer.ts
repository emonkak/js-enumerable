import buffer from '../lifted/buffer';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.buffer = buffer;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        buffer: typeof buffer;
    }
}
