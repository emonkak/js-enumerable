import doWhileFn from '../doWhile';
import { Enumerable } from '../internal/Enumerable';

function doWhile<TSource>(this: Enumerable<TSource>, condition: () => boolean): Enumerable<TSource> {
    return this.lift<TSource>(doWhileFn.call(this, condition));
}

Enumerable.prototype.doWhile = doWhile;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        doWhile(condition: () => boolean): Enumerable<TSource>;
    }
}
