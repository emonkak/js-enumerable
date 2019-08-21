import defaultIfEmptyFn from '../defaultIfEmpty';
import { Enumerable } from '../internal/Enumerable';

function defaultIfEmpty<TSource>(this: Enumerable<TSource>, defaultValue: TSource): Enumerable<TSource> {
    return new Enumerable<TSource>(defaultIfEmptyFn.call(this.source, defaultValue));
}

Enumerable.prototype.defaultIfEmpty = defaultIfEmpty;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        defaultIfEmpty(defaultValue: TSource): Enumerable<TSource>;
    }
}
