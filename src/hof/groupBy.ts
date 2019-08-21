import groupByFn from '../groupBy';

export default function groupBy<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Iterable<TSource>) => Iterable<[TKey, TSource]>;
export default function groupBy<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): (source: Iterable<TSource>) => Iterable<[TKey, TElement]>;
export default function groupBy<TSource, TKey, TElement, TResult>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement, resultSelector?: (key: TKey, elements: TElement[]) => TResult): (source: Iterable<TSource>) => Iterable<TResult> {
    return (source) => groupByFn.call(source, keySelector, elementSelector, resultSelector);
}
