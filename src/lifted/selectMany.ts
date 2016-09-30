import { Enumerable } from '../Enumerable';
import selectManyFn from '../selectMany';

export default function selectMany<TSource, TResult>(this: Enumerable<TSource>, collectionSelector: (element: TSource) => Iterable<TResult>): Enumerable<TResult> {
    return this.lift<TResult>(selectManyFn.call(this, collectionSelector));
}
