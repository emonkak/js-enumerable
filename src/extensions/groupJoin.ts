import groupJoinFn from '../groupJoin';
import { Enumerable } from '../internal/Enumerable';

function groupJoin<TOuter, TInner, TKey, TResult>(this: Enumerable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner[]) => TResult): Enumerable<TResult> {
    return this.lift<TResult>(groupJoinFn.call(this.source, inner, outerKeySelector, innerKeySelector, resultSelector));
}

Enumerable.prototype.groupJoin = groupJoin;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        groupJoin<TInner, TKey, TResult>(inner: Iterable<TInner>, outerKeySelector: (element: TSource) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TSource, inner: TInner[]) => TResult): Enumerable<TResult>;
    }
}
