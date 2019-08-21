import joinFn from '../join';

export default function join<TOuter, TInner, TKey, TResult>(inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner) => TResult): (source: Iterable<TOuter>) => Iterable<TResult> {
    return (source) => joinFn.call(source, inner, outerKeySelector, innerKeySelector, resultSelector);
}
