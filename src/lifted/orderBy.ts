import IEnumerable from '../IEnumerable';
import orderByFn from '../orderBy';

export default function orderBy<TSource>(this: IEnumerable<TSource>): IEnumerable<TSource>;
export default function orderBy<TSource, TKey>(this: IEnumerable<TSource>, keySelector?: (value: TSource) => TKey): IEnumerable<TSource> {
    return this.lift<TSource>(orderByFn.call(this, keySelector));
}
