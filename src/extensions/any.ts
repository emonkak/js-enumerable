import anyFn from '../any';
import { Enumerable } from '../internal/Enumerable';

function any<TSource>(this: Enumerable<TSource>, predicate?: (element: TSource) => boolean): boolean {
    return anyFn.call(this.source, predicate);
}

Enumerable.prototype.any = any;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        any(predicate?: (element: TSource) => boolean): boolean;
    }
}
