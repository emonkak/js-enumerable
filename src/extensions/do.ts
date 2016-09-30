import _do from '../lifted/do';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.do = _do;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        do: typeof _do;
    }
}
