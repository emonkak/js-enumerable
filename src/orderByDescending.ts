import OrderedEnumerable from './internal/OrderedEnumerable';

export default function orderByDescending<TSource>(): OrderedEnumerable<TSource, TSource>;
export default function orderByDescending<TSource, TKey>(keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey> {
    if (keySelector == null) keySelector = value => value as any;
    return new OrderedEnumerable(this as Iterable<TSource>, keySelector, true);
}
