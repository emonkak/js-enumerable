import OrderedEnumerable from '../internal/OrderedEnumerable';
import orderByDescendingFn from '../orderByDescending';

export default function orderByDescending<TSource>(): (source: Iterable<TSource>) => OrderedEnumerable<TSource, TSource>;
export default function orderByDescending<TSource, TKey>(keySelector: (value: TSource) => TKey): (source: Iterable<TSource>) => OrderedEnumerable<TSource, TKey>;
export default function orderByDescending<TSource, TKey>(keySelector?: (value: TSource) => TKey): (source: Iterable<TSource>) => OrderedEnumerable<TSource, TKey> {
    return (source) => orderByDescendingFn.call(source, keySelector);
}
