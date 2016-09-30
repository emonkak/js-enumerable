import elementAt from '../elementAt';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.elementAt = elementAt;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        elementAt: typeof elementAt;
    }
}
