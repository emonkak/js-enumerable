import _finally from '../finally';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.finally = _finally;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        finally: typeof _finally;
    }
}
