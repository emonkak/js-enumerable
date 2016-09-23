import IEnumerable from '../IEnumerable';
import groupByFn from '../groupBy';

export default function groupBy<TSource, TKey>(this: IEnumerable<TSource>, keySelector: (element: TSource) => TKey): IEnumerable<[TKey, TSource]>;
export default function groupBy<TSource, TKey, TElement>(this: IEnumerable<TSource>, keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): IEnumerable<[TKey, TElement]>;
export default function groupBy<TSource, TKey, TElement, TResult>(this: IEnumerable<TSource>, keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement, resultSelector?: (key: TKey, elements: TElement[]) => TResult): IEnumerable<TResult> {
    return this.lift<TResult>(groupByFn.call(this, keySelector, elementSelector, resultSelector));
}
