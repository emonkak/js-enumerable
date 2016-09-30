import { Enumerable } from '../Enumerable';
import skipWhileFn from '../skipWhile';

export default function skipWhile<TSource>(this: Enumerable<TSource>, predicate: (element: TSource) => boolean): Enumerable<TSource> {
    return this.lift<TSource>(skipWhileFn.call(this, predicate));
}
