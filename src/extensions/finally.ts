import finallyFn from '../finally';
import { Enumerable } from '../internal/Enumerable';

function _finally<TSource>(this: Enumerable<TSource>, finallyAction: () => void): Enumerable<TSource> {
    return new Enumerable<TSource>(finallyFn.call(this.source, finallyAction));
}

Enumerable.prototype.finally = _finally;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        finally(finallyAction: () => void): Enumerable<TSource>;
    }
}
