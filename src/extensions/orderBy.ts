import OrderedEnumerable from '../internal/OrderedEnumerable';
import orderByFn from '../orderBy';
import { Enumerable } from '../internal/Enumerable';

function orderBy<TSource>(this: Enumerable<TSource>): OrderedEnumerable<TSource, TSource>;
function orderBy<TSource, TKey>(this: Enumerable<TSource>, keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey> {
    return orderByFn.call(this.source, keySelector);
}

Enumerable.prototype.orderBy = orderBy;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        orderBy(): OrderedEnumerable<TSource, TSource>;
        orderBy<TKey>(keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey>;
    }
}
