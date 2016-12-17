import firstOrDefaultFn from '../firstOrDefault';
import { Enumerable } from '../internal/Enumerable';

function firstOrDefault<TSource>(this: Enumerable<TSource>): TSource | null;
function firstOrDefault<TSource>(this: Enumerable<TSource>, predicate: (element: TSource) => boolean): TSource | null;
function firstOrDefault<TSource>(this: Enumerable<TSource>, predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): TSource;
function firstOrDefault<TSource>(this: Enumerable<TSource>, predicate?: ((element: TSource) => boolean) | null, defaultValue: TSource | null = null): TSource | null {
    return firstOrDefaultFn.call(this.source, predicate, defaultValue);
}

Enumerable.prototype.firstOrDefault = firstOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        firstOrDefault(): TSource | null;
        firstOrDefault(predicate: (element: TSource) => boolean): TSource | null;
        firstOrDefault(predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): TSource;
    }
}
