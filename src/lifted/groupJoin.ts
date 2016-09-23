import IEnumerable from '../IEnumerable';
import groupJoinFn from '../groupJoin';

export default function groupJoin<TOuter, TInner, TKey, TResult>(this: IEnumerable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner[]) => TResult): IEnumerable<TResult> {
    return this.lift<TResult>(groupJoinFn.call(this, inner, outerKeySelector, innerKeySelector, resultSelector));
}
