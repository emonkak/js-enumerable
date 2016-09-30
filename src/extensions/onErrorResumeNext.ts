import onErrorResumeNext from '../lifted/onErrorResumeNext';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.onErrorResumeNext = onErrorResumeNext;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        onErrorResumeNext: typeof onErrorResumeNext;
    }
}
