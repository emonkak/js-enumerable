import groupJoinFn from '../groupJoin';
import { Enumerable } from '../internal/Enumerable';

export default function groupJoin<TOuter, TInner, TKey, TResult>(inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner[]) => TResult): (source: Enumerable<TOuter>) => Enumerable<TResult> {
    return (source) => source.lift<TResult>(groupJoinFn.call(source.source, inner, outerKeySelector, innerKeySelector, resultSelector));
}
