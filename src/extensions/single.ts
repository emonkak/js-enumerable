import single from '../single';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.single = single;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        single(predicate?: (element: TSource) => boolean): TSource;
    }
}
