import countFn from '../count';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.count = count;

function count<TSource>(this: Enumerable<TSource>, predicate?: (item: TSource) => boolean): number {
    return countFn.call(this.source, predicate);
}

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        count(predicate?: (item: TSource) => boolean): number;
    }
}
