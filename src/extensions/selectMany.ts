import selectManyFn from '../selectMany';
import { Enumerable } from '../internal/Enumerable';

function selectMany<TSource, TResult>(this: Enumerable<TSource>, collectionSelector: (element: TSource) => Iterable<TResult>): Enumerable<TResult> {
    return new Enumerable<TResult>(selectManyFn.call(this.source, collectionSelector));
}

Enumerable.prototype.selectMany = selectMany;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        selectMany<TResult>(collectionSelector: (element: TSource) => Iterable<TResult>): Enumerable<TResult>;
    }
}
