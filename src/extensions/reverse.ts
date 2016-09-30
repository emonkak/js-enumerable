import reverse from '../lifted/reverse';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.reverse = reverse;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        reverse: typeof reverse;
    }
}
