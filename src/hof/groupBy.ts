import groupByFn from '../groupBy';
import { Enumerable } from '../internal/Enumerable';

export default function groupBy<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Enumerable<TSource>) => Enumerable<[TKey, TSource]>;
export default function groupBy<TSource, TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): (source: Enumerable<TSource>) => Enumerable<[TKey, TElement]>;
export default function groupBy<TSource, TKey, TElement, TResult>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement, resultSelector?: (key: TKey, elements: TElement[]) => TResult): (source: Enumerable<TSource>) => Enumerable<TResult> {
    return (source) => source.lift<TResult>(groupByFn.call(source.source, keySelector, elementSelector, resultSelector));
}
