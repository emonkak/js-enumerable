import all from '../all';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.all = all;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        all(predicate?: (element: TSource) => boolean): boolean;
    }
}
