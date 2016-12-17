import elementAtOrDefaultFn from '../elementAtOrDefault';
import { Enumerable } from '../internal/Enumerable';

function elementAtOrDefault<TSource>(this: Enumerable<TSource>, index: number): TSource | null;
function elementAtOrDefault<TSource>(this: Enumerable<TSource>, index: number, defaultValue: TSource): TSource;
function elementAtOrDefault<TSource>(this: Enumerable<TSource>, index: number, defaultValue: TSource | null = null): TSource | null {
    return elementAtOrDefaultFn.call(this.source, index, defaultValue);
}

Enumerable.prototype.elementAtOrDefault = elementAtOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        elementAtOrDefault(index: number): TSource | null;
        elementAtOrDefault(index: number, defaultValue: TSource): TSource;
    }
}
