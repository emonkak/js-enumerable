import retry from '../lifted/retry';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.retry = retry;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        retry: typeof retry;
    }
}
