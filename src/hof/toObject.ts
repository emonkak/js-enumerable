import toObjectFn from '../toObject';
import { Enumerable } from '../internal/Enumerable';

export default function toObject<TSource>(keySelector: (element: TSource) => string): (source: Enumerable<TSource>) => { [key: string]: TSource };
export default function toObject<TSource, TElement>(keySelector: (element: TSource) => string, elementSelector: (element: TSource) => TElement): (source: Enumerable<TSource>) => { [key: string]: TElement };
export default function toObject<TSource, TElement>(keySelector: (element: TSource) => string, elementSelector?: (element: TSource) => TElement): (source: Enumerable<TSource>) => { [key: string]: TElement } {
    return (source) => toObjectFn.call(source, keySelector, elementSelector);
}
