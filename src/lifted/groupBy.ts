import ILiftable from '../internal/ILiftable';
import groupByFn from '../groupBy';

export default function groupBy<TSource, TKey>(this: ILiftable<TSource>, keySelector: (element: TSource) => TKey): ILiftable<[TKey, TSource]>;
export default function groupBy<TSource, TKey, TElement>(this: ILiftable<TSource>, keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): ILiftable<[TKey, TElement]>;
export default function groupBy<TSource, TKey, TElement, TResult>(this: ILiftable<TSource>, keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement, resultSelector?: (key: TKey, elements: TElement[]) => TResult): ILiftable<TResult> {
    return this.lift<TResult>(groupByFn.call(this, keySelector, elementSelector, resultSelector));
}
