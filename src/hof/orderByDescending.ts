import OrderedEnumerable from '../internal/OrderedEnumerable';
import orderByDescendingFn from '../orderByDescending';
import { Enumerable } from '../internal/Enumerable';

export default function orderByDescending<TSource>(): (source: Enumerable<TSource>) => OrderedEnumerable<TSource, TSource>;
export default function orderByDescending<TSource, TKey>(keySelector: (value: TSource) => TKey): (source: Enumerable<TSource>) => OrderedEnumerable<TSource, TKey>;
export default function orderByDescending<TSource, TKey>(keySelector?: (value: TSource) => TKey): (source: Enumerable<TSource>) => OrderedEnumerable<TSource, TKey> {
    return (source) => orderByDescendingFn.call(source, keySelector);
}
