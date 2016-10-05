import distinctFn from '../distinct';
import { Enumerable } from '../internal/Enumerable';

function distinct<TSource>(this: Enumerable<TSource>): Enumerable<TSource>;
function distinct<TSource, TKey>(this: Enumerable<TSource>, keySelector?: (element: TSource) => TKey): Enumerable<TSource> {
    return this.lift<TSource>(distinctFn.call(this.source, keySelector));
}

Enumerable.prototype.distinct = distinct;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        distinct(): Enumerable<TSource>;
        distinct<TKey>(keySelector?: (element: TSource) => TKey): Enumerable<TSource>;
    }
}
