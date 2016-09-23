import IEnumerable from '../IEnumerable';
import distinctFn from '../distinct';

export default function distinct<TSource>(this: IEnumerable<TSource>): IEnumerable<TSource>;
export default function distinct<TSource, TKey>(this: IEnumerable<TSource>, keySelector?: (element: TSource) => TKey): IEnumerable<TSource> {
    return this.lift<TSource>(distinctFn.call(this, keySelector));
}
