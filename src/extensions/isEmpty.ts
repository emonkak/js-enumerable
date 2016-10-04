import isEmpty from '../isEmpty';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.isEmpty = isEmpty;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        isEmpty(): boolean;
    }
}
