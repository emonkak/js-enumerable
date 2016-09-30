import { Enumerable } from '../Enumerable';
import orderByDescendingFn from '../orderByDescending';

export default function orderByDescending<TSource>(this: Enumerable<TSource>): Enumerable<TSource>;
export default function orderByDescending<TSource, TKey>(this: Enumerable<TSource>, keySelector?: (value: TSource) => TKey): Enumerable<TSource> {
    return this.lift<TSource>(orderByDescendingFn.call(this, keySelector));
}
