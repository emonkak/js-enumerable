import elementAtOrDefault from '../elementAtOrDefault';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.elementAtOrDefault = elementAtOrDefault;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        elementAtOrDefault(index: number, defaultValue?: TSource): TSource;
    }
}
