import IEnumerable from '../IEnumerable';
import selectFn from '../select';

export default function select<TSource, TResult>(this: IEnumerable<TSource>, selector: (element: TSource) => TResult): IEnumerable<TResult> {
    return this.lift<TResult>(selectFn.call(this, selector));
}
