import { Enumerable } from '../Enumerable';
import memoizeFn from '../memoize';

export default function memoize<TSource>(this: Enumerable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(memoizeFn.call(this));
}
