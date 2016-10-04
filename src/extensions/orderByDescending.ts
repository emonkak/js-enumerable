import OrderedEnumerable from '../internal/OrderedEnumerable';
import orderByDescending from '../orderByDescending';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.orderByDescending = orderByDescending;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        orderByDescending(): OrderedEnumerable<TSource, TSource>;
        orderByDescending<TKey>(keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey>;
    }
}
