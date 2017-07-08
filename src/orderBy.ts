import OrderedEnumerable from './internal/OrderedEnumerable';

export default function orderBy<TSource>(this: Iterable<TSource>): OrderedEnumerable<TSource, TSource>;
export default function orderBy<TSource, TKey>(this: Iterable<TSource>, keySelector: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey>;
export default function orderBy<TSource, TKey>(this: Iterable<TSource>, keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey> {
    if (keySelector == null) {
        keySelector = value => value as any;
    }
    return new OrderedEnumerable(this, keySelector, false);
}
