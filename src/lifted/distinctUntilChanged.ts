import IEnumerable from '../IEnumerable';
import distinctUntilChangedFn from '../distinctUntilChanged';

export default function distinctUntilChanged<TSource>(this: IEnumerable<TSource>): IEnumerable<TSource>;
export default function distinctUntilChanged<TSource, TKey>(this: IEnumerable<TSource>, keySelector?: (element: TSource) => TKey): IEnumerable<TSource> {
    return this.lift<TSource>(distinctUntilChangedFn.call(this, keySelector));
}
