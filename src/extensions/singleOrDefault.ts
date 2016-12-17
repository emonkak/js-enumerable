import singleOrDefaultFn from '../singleOrDefault';
import { Enumerable } from '../internal/Enumerable';

function singleOrDefault<TSource>(this: Enumerable<TSource>): TSource | null;
function singleOrDefault<TSource>(this: Enumerable<TSource>, predicate: (element: TSource) => boolean): TSource | null;
function singleOrDefault<TSource>(this: Enumerable<TSource>, predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): TSource;
function singleOrDefault<TSource>(this: Enumerable<TSource>, predicate?: ((element: TSource) => boolean) | null, defaultValue: TSource | null = null): TSource | null {
    return singleOrDefaultFn.call(this.source, predicate, defaultValue);
}

Enumerable.prototype.singleOrDefault = singleOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        singleOrDefault(): TSource | null;
        singleOrDefault(predicate: (element: TSource) => boolean): TSource | null;
        singleOrDefault(predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): TSource;
    }
}
