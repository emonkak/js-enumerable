import forEach from '../forEach';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.forEach = forEach;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        forEach(action: (element: TSource) => void): void;
    }
}
