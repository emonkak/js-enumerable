import IEnumerable from '../IEnumerable';
import joinFn from '../join';

export default function join<TOuter, TInner, TKey, TResult>(this: IEnumerable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner) => TResult): IEnumerable<TResult> {
    return this.lift<TResult>(joinFn.call(this, inner, outerKeySelector, innerKeySelector, resultSelector));
}
