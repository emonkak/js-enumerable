import selectFn from '../select';
import { Enumerable } from '../internal/Enumerable';

function select<TSource, TResult>(this: Enumerable<TSource>, selector: (element: TSource) => TResult): Enumerable<TResult> {
    return this.lift<TResult>(selectFn.call(this.source, selector));
}

Enumerable.prototype.select = select;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        select<TResult>(selector: (element: TSource) => TResult): Enumerable<TResult>;
    }
}
