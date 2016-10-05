import startWithFn from '../startWith';
import { Enumerable } from '../internal/Enumerable';

function startWith<TSource>(this: Enumerable<TSource>, ...elements: TSource[]): Enumerable<TSource> {
    return this.lift<TSource>(startWithFn.apply(this.source, elements));
}

Enumerable.prototype.startWith = startWith;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        startWith(...elements: TSource[]): Enumerable<TSource>;
    }
}
