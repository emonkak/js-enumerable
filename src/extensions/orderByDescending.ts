import OrderedEnumerable from '../internal/OrderedEnumerable';
import orderByDescendingFn from '../orderByDescending';
import { Enumerable } from '../internal/Enumerable';

function orderByDescending<TSource>(this: Enumerable<TSource>): OrderedEnumerable<TSource, TSource>;
function orderByDescending<TSource, TKey>(this: Enumerable<TSource>, keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey> {
    return orderByDescendingFn.call(this.source, keySelector);
}

Enumerable.prototype.orderByDescending = orderByDescending;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        orderByDescending(): OrderedEnumerable<TSource, TSource>;
        orderByDescending<TKey>(keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey>;
    }
}
