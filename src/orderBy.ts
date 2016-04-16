import OrderedEnumerable from './internal/OrderedEnumerable';

export default function orderBy<TSource>(): OrderedEnumerable<TSource, TSource>;
export default function orderBy<TSource, TKey>(keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey> {
    if (keySelector == null) keySelector = value => value as any;
    return new OrderedEnumerable(this as Iterable<TSource>, keySelector, false);
}
