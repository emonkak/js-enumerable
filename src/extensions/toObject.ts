import toObjectFn from '../toObject';
import { Enumerable } from '../internal/Enumerable';

function toObject<TSource>(this: Enumerable<TSource>, keySelector: (element: TSource) => string): { [key: string]: TSource };
function toObject<TSource, TElement>(this: Enumerable<TSource>, keySelector: (element: TSource) => string, elementSelector?: (element: TSource) => TElement): { [key: string]: TElement } {
    return toObjectFn.call(this.source, keySelector, elementSelector);
}

Enumerable.prototype.toObject = toObject;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        toObject(keySelector: (element: TSource) => string): { [key: string]: TSource };
        toObject<TElement>(keySelector: (element: TSource) => string, elementSelector?: (element: TSource) => TElement): { [key: string]: TElement };
    }
}

