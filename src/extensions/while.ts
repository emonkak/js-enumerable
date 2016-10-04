import whileFn from '../while';
import { Enumerable } from '../internal/Enumerable';

function _while<TSource>(this: Enumerable<TSource>, condition: () => boolean): Enumerable<TSource> {
    return this.lift<TSource>(whileFn.call(this, condition));
}

Enumerable.prototype.while = _while;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        while(condition: () => boolean): Enumerable<TSource>;
    }
}
