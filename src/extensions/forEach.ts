import forEachFn from '../forEach';
import { Enumerable } from '../internal/Enumerable';

function forEach<TSource>(this: Enumerable<TSource>, action: (element: TSource) => void): void {
    forEachFn.call(this.source, action);
}

Enumerable.prototype.forEach = forEach;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        forEach(action: (element: TSource) => void): void;
    }
}
