import elementAtOrDefault from '../elementAtOrDefault';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.elementAtOrDefault = elementAtOrDefault;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        elementAtOrDefault: typeof elementAtOrDefault;
    }
}
