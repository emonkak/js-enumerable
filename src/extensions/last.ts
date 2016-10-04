import last from '../last';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.last = last;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        last(predicate?: (value: TSource) => boolean): TSource;
    }
}
