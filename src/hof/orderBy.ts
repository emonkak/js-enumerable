import OrderedEnumerable from '../internal/OrderedEnumerable';
import orderByFn from '../orderBy';

export default function orderBy<TSource>(): (source: Iterable<TSource>) => OrderedEnumerable<TSource, TSource>;
export default function orderBy<TSource, TKey>(keySelector: (value: TSource) => TKey): (source: Iterable<TSource>) => OrderedEnumerable<TSource, TKey>;
export default function orderBy<TSource, TKey>(keySelector?: (value: TSource) => TKey): (source: Iterable<TSource>) => OrderedEnumerable<TSource, TKey> {
    return (source) => orderByFn.call(source, keySelector);
}
