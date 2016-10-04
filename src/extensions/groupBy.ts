import groupByFn from '../groupBy';
import { Enumerable } from '../internal/Enumerable';

function groupBy<TSource, TKey>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey): Enumerable<[TKey, TSource]>;
function groupBy<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): Enumerable<[TKey, TElement]>;
function groupBy<TSource, TKey, TElement, TResult>(this: Enumerable<TSource>, keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement, resultSelector?: (key: TKey, elements: TElement[]) => TResult): Enumerable<TResult> {
    return this.lift<TResult>(groupByFn.call(this, keySelector, elementSelector, resultSelector));
}

Enumerable.prototype.groupBy = groupBy;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        groupBy<TKey>(keySelector: (element: TSource) => TKey): Enumerable<[TKey, TSource]>;
        groupBy<TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): Enumerable<[TKey, TElement]>;
        groupBy<TKey, TElement, TResult>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement, resultSelector?: (key: TKey, elements: TElement[]) => TResult): Enumerable<TResult>;
    }
}
