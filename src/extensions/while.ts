import _while from '../lifted/while';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.while = _while;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        while: typeof _while;
    }
}
