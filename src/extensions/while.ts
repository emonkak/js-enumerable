import whileFn from '../while';
import { Enumerable } from '../internal/Enumerable';

function _while<TSource>(this: Enumerable<TSource>, condition: () => boolean): Enumerable<TSource> {
    return new Enumerable<TSource>(whileFn.call(this.source, condition));
}

Enumerable.prototype.while = _while;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        while(condition: () => boolean): Enumerable<TSource>;
    }
}
