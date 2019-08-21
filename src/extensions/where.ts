import whereFn from '../where';
import { Enumerable } from '../internal/Enumerable';

function where<TSource>(this: Enumerable<TSource>, predicate: (item: TSource) => boolean): Enumerable<TSource> {
    return new Enumerable<TSource>(whereFn.call(this.source, predicate));
}

Enumerable.prototype.where = where;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        where(predicate: (item: TSource) => boolean): Enumerable<TSource>;
    }
}
