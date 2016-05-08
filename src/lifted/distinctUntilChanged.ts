import ILiftable from '../internal/ILiftable';
import distinctUntilChangedFn from '../distinctUntilChanged';

export default function distinctUntilChanged<TSource>(this: ILiftable<TSource>): ILiftable<TSource>;
export default function distinctUntilChanged<TSource, TKey>(this: ILiftable<TSource>, keySelector?: (element: TSource) => TKey): ILiftable<TSource> {
    return this.lift<TSource>(distinctUntilChangedFn.call(this, keySelector));
}
