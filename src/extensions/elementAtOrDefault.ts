import elementAtOrDefaultFn from '../elementAtOrDefault';
import { Enumerable } from '../internal/Enumerable';

function elementAtOrDefault<TSource>(this: Enumerable<TSource>, index: number, defaultValue: TSource = null): TSource {
    return elementAtOrDefaultFn.call(this.source, index, defaultValue);
}

Enumerable.prototype.elementAtOrDefault = elementAtOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        elementAtOrDefault(index: number, defaultValue?: TSource): TSource;
    }
}
