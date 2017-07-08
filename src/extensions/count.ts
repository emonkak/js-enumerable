import countFn from '../count';
import { Enumerable } from '../internal/Enumerable';

function count<TSource>(this: Enumerable<TSource>, predicate?: (item: TSource) => boolean): number {
    return countFn.call(this.source, predicate);
}

Enumerable.prototype.count = count;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        count(predicate?: (item: TSource) => boolean): number;
    }
}
