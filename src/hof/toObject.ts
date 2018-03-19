import toObjectFn from '../toObject';

export default function toObject<TSource>(keySelector: (element: TSource) => string): (source: Iterable<TSource>) => { [key: string]: TSource };
export default function toObject<TSource, TElement>(keySelector: (element: TSource) => string, elementSelector: (element: TSource) => TElement): (source: Iterable<TSource>) => { [key: string]: TElement };
export default function toObject<TSource, TElement>(keySelector: (element: TSource) => string, elementSelector?: (element: TSource) => TElement): (source: Iterable<TSource>) => { [key: string]: TElement } {
    return (source) => toObjectFn.call(source, keySelector, elementSelector);
}
