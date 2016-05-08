import ILiftable from '../internal/ILiftable';
import groupJoinFn from '../groupJoin';

export default function groupJoin<TOuter, TInner, TKey, TResult>(this: ILiftable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner[]) => TResult): ILiftable<TResult> {
    return this.lift<TResult>(groupJoinFn.call(this, inner, outerKeySelector, innerKeySelector, resultSelector));
}
