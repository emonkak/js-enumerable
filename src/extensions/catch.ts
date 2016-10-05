import catchFn from '../catch';
import { Enumerable } from '../internal/Enumerable';

function _catch<TSource, TException>(this: Enumerable<TSource>, handler: (exception: TException) => Iterable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(catchFn.call(this.source, handler));
}

Enumerable.prototype.catch = _catch;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        catch<TException>(handler: (exception: TException) => Iterable<TSource>): Enumerable<TSource>;
    }
}
