import selectFn from '../select';
import { Enumerable } from '../internal/Enumerable';

export default function select<TSource, TResult>(selector: (element: TSource) => TResult): (source: Enumerable<TSource>) => Enumerable<TResult> {
    return (source) => source.lift<TResult>(selectFn.call(source.source, selector));
}
