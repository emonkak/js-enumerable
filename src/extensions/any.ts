import any from '../any';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.any = any;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        any(predicate?: (element: TSource) => boolean): boolean;
    }
}
