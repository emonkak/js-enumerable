import joinFn from '../join';
import { Enumerable } from '../internal/Enumerable';

function join<TOuter, TInner, TKey, TResult>(this: Enumerable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner) => TResult): Enumerable<TResult> {
    return this.lift<TResult>(joinFn.call(this, inner, outerKeySelector, innerKeySelector, resultSelector));
}

Enumerable.prototype.join = join;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        join<TInner, TKey, TResult>(inner: Iterable<TInner>, outerKeySelector: (element: TSource) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TSource, inner: TInner) => TResult): Enumerable<TResult>;
    }
}
