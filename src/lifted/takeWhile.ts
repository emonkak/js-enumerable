import { Enumerable } from '../Enumerable';
import takeWhileFn from '../takeWhile';

export default function takeWhile<TSource>(this: Enumerable<TSource>, predicate: (element: TSource) => boolean): Enumerable<TSource> {
    return this.lift<TSource>(takeWhileFn.call(this, predicate));
}
