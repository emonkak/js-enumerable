import groupJoinFn from '../groupJoin';

export default function groupJoin<TOuter, TInner, TKey, TResult>(inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner[]) => TResult): (source: Iterable<TOuter>) => Iterable<TResult> {
    return (source) => groupJoinFn.call(source, inner, outerKeySelector, innerKeySelector, resultSelector);
}
