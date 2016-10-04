import OrderedEnumerable from '../internal/OrderedEnumerable';
import orderBy from '../orderBy';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.orderBy = orderBy;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        orderBy(): OrderedEnumerable<TSource, TSource>;
        orderBy<TKey>(keySelector?: (value: TSource) => TKey): OrderedEnumerable<TSource, TKey>;
    }
}
