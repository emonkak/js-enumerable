import allFn from '../all';
import { Enumerable } from '../internal/Enumerable';

function all<TSource>(this: Enumerable<TSource>, predicate?: (element: TSource) => boolean): boolean {
    return allFn.call(this.source, predicate);
}

Enumerable.prototype.all = all;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        all(predicate?: (element: TSource) => boolean): boolean;
    }
}
