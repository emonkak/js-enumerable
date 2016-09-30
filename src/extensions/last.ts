import last from '../last';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.last = last;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        last: typeof last;
    }
}
