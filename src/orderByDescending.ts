import OrderedEnumerable from './internal/OrderedEnumerable';

export default function orderByDescending<TSource>(this: Iterable<TSource>): OrderedEnumerable<TSource, TSource>;
export default function orderByDescending<TSource, TKey>(this: Iterable<TSource>, keySelector: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey>;
export default function orderByDescending<TSource, TKey>(this: Iterable<TSource>, keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey> {
    if (keySelector == null) {
        keySelector = value => value as any;
    }
    if (this instanceof OrderedEnumerable) {
        return (this as any).thenByDescending(keySelector);
    }
    return new OrderedEnumerable(this, keySelector, true);
}
