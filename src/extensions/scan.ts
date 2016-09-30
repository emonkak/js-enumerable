import scan from '../lifted/scan';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.scan = scan;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        scan: typeof scan;
    }
}
