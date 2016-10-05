import isEmptyFn from '../isEmpty';
import { Enumerable } from '../internal/Enumerable';

function isEmpty<TSource>(this: Enumerable<TSource>): boolean {
    return isEmptyFn.call(this.source);
}

Enumerable.prototype.isEmpty = isEmpty;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        isEmpty(): boolean;
    }
}
