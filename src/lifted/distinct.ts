import ILiftable from '../internal/ILiftable';
import distinctFn from '../distinct';

export default function distinct<TSource>(this: ILiftable<TSource>): ILiftable<TSource>;
export default function distinct<TSource, TKey>(this: ILiftable<TSource>, keySelector?: (element: TSource) => TKey): ILiftable<TSource> {
    return this.lift<TSource>(distinctFn.call(this, keySelector));
}
