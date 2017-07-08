import selectManyFn from '../selectMany';
import { Enumerable } from '../internal/Enumerable';

export default function selectMany<TSource, TResult>(collectionSelector: (element: TSource) => Iterable<TResult>): (source: Enumerable<TSource>) => Enumerable<TResult> {
    return (source) => source.lift<TResult>(selectManyFn.call(source.source, collectionSelector));
}
