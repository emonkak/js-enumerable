import ILiftable from '../internal/ILiftable';
import orderByFn from '../orderBy';

export default function orderBy<TSource>(this: ILiftable<TSource>): ILiftable<TSource>;
export default function orderBy<TSource, TKey>(this: ILiftable<TSource>, keySelector?: (value: TSource) => TKey): ILiftable<TSource> {
    return this.lift<TSource>(orderByFn.call(this, keySelector));
}
