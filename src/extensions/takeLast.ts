import takeLast from '../lifted/takeLast';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.takeLast = takeLast;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        takeLast: typeof takeLast;
    }
}
