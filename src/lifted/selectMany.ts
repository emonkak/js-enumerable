import IEnumerable from '../IEnumerable';
import selectManyFn from '../selectMany';

export default function selectMany<TSource, TResult>(this: IEnumerable<TSource>, collectionSelector: (element: TSource) => Iterable<TResult>): IEnumerable<TResult> {
    return this.lift<TResult>(selectManyFn.call(this, collectionSelector));
}
