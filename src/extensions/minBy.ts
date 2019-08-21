import minByFn from '../minBy';
import { Enumerable } from '../internal/Enumerable';

function minBy<TSource, TKey>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey): Enumerable<TSource> {
    return new Enumerable<TSource>(minByFn.call(this.source, keySelector));
}

Enumerable.prototype.minBy = minBy;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        minBy<TKey>(keySelector: (element: TSource) => TKey): Enumerable<TSource>;
    }
}
