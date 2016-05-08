import ILiftable from '../internal/ILiftable';
import selectFn from '../select';

export default function select<TSource, TResult>(this: ILiftable<TSource>, selector: (element: TSource) => TResult): ILiftable<TResult> {
    return this.lift<TResult>(selectFn.call(this, selector));
}
