import lastOrDefaultFn from '../lastOrDefault';
import { Enumerable } from '../internal/Enumerable';

function lastOrDefault<TSource>(this: Enumerable<TSource>): TSource | null;
function lastOrDefault<TSource>(this: Enumerable<TSource>, predicate: (value: TSource) => boolean): TSource | null;
function lastOrDefault<TSource>(this: Enumerable<TSource>, predicate: ((value: TSource) => boolean) | null, defaultValue: TSource): TSource;
function lastOrDefault<TSource>(this: Enumerable<TSource>, predicate?: ((value: TSource) => boolean) | null, defaultValue: TSource | null = null): TSource | null {
    return lastOrDefaultFn.call(this.source, predicate, defaultValue);
}

Enumerable.prototype.lastOrDefault = lastOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        lastOrDefault(): TSource | null;
        lastOrDefault(predicate: (value: TSource) => boolean): TSource | null;
        lastOrDefault(predicate: ((value: TSource) => boolean) | null, defaultValue: TSource): TSource;
    }
}
