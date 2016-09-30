import { Enumerable } from '../Enumerable';
import orderByFn from '../orderBy';

export default function orderBy<TSource>(this: Enumerable<TSource>): Enumerable<TSource>;
export default function orderBy<TSource, TKey>(this: Enumerable<TSource>, keySelector?: (value: TSource) => TKey): Enumerable<TSource> {
    return this.lift<TSource>(orderByFn.call(this, keySelector));
}
