import OrderedEnumerable from '../internal/OrderedEnumerable';
import orderByFn from '../orderBy';
import { Enumerable } from '../internal/Enumerable';

export default function orderBy<TSource>(): (source: Enumerable<TSource>) => OrderedEnumerable<TSource, TSource>;
export default function orderBy<TSource, TKey>(keySelector: (value: TSource) => TKey): (source: Enumerable<TSource>) => OrderedEnumerable<TSource, TKey>;
export default function orderBy<TSource, TKey>(keySelector?: (value: TSource) => TKey): (source: Enumerable<TSource>) => OrderedEnumerable<TSource, TKey> {
    return (source) => orderByFn.call(source, keySelector);
}
