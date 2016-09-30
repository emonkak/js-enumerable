import { Enumerable } from '../Enumerable';
import selectFn from '../select';

export default function select<TSource, TResult>(this: Enumerable<TSource>, selector: (element: TSource) => TResult): Enumerable<TResult> {
    return this.lift<TResult>(selectFn.call(this, selector));
}
