import elementAt from '../elementAt';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.elementAt = elementAt;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        elementAt(index: number): TSource;
    }
}
