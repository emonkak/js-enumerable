import _catch from '../lifted/catch';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.catch = _catch;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        catch: typeof _catch;
    }
}
