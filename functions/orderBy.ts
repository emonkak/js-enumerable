import OrderedEnumerable from '../OrderedEnumerable'

export default function orderBy<TSource, TKey>(keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey> {
    if (!keySelector) keySelector = value => value as any
    return new OrderedEnumerable(this as Iterable<TSource>, keySelector, false)
}
