import { Enumerable } from '../Enumerable';
import groupJoinFn from '../groupJoin';

export default function groupJoin<TOuter, TInner, TKey, TResult>(this: Enumerable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner[]) => TResult): Enumerable<TResult> {
    return this.lift<TResult>(groupJoinFn.call(this, inner, outerKeySelector, innerKeySelector, resultSelector));
}
