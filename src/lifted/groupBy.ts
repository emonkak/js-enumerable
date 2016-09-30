import { Enumerable } from '../Enumerable';
import groupByFn from '../groupBy';

export default function groupBy<TSource, TKey>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey): Enumerable<[TKey, TSource]>;
export default function groupBy<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): Enumerable<[TKey, TElement]>;
export default function groupBy<TSource, TKey, TElement, TResult>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement, resultSelector?: (key: TKey, elements: TElement[]) => TResult): Enumerable<TResult> {
    return this.lift<TResult>(groupByFn.call(this, keySelector, elementSelector, resultSelector));
}
