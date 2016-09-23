import IEnumerable from '../IEnumerable';
import orderByDescendingFn from '../orderByDescending';

export default function orderByDescending<TSource>(this: IEnumerable<TSource>): IEnumerable<TSource>;
export default function orderByDescending<TSource, TKey>(this: IEnumerable<TSource>, keySelector?: (value: TSource) => TKey): IEnumerable<TSource> {
    return this.lift<TSource>(orderByDescendingFn.call(this, keySelector));
}
