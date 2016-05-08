import ILiftable from '../internal/ILiftable';
import selectManyFn from '../selectMany';

export default function selectMany<TSource, TResult>(this: ILiftable<TSource>, collectionSelector: (element: TSource) => Iterable<TResult>): ILiftable<TResult> {
    return this.lift<TResult>(selectManyFn.call(this, collectionSelector));
}
