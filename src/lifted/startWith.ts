import { Enumerable } from '../Enumerable';
import startWithFn from '../startWith';

export default function startWith<TSource>(this: Enumerable<TSource>, ...elements: TSource[]): Enumerable<TSource> {
    return this.lift<TSource>(startWithFn.apply(this, elements));
}
