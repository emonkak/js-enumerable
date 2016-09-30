import any from '../any';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.any = any;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        any: typeof any;
    }
}
