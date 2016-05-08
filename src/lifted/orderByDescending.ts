import ILiftable from '../internal/ILiftable';
import orderByDescendingFn from '../orderByDescending';

export default function orderByDescending<TSource>(this: ILiftable<TSource>): ILiftable<TSource>;
export default function orderByDescending<TSource, TKey>(this: ILiftable<TSource>, keySelector?: (value: TSource) => TKey): ILiftable<TSource> {
    return this.lift<TSource>(orderByDescendingFn.call(this, keySelector));
}
