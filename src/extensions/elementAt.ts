import elementAtFn from '../elementAt';
import { Enumerable } from '../internal/Enumerable';

function elementAt<TSource>(this: Enumerable<TSource>, index: number): TSource {
    return elementAtFn.call(this.source, index);
}

Enumerable.prototype.elementAt = elementAt;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        elementAt(index: number): TSource;
    }
}
