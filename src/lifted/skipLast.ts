import { Enumerable } from '../Enumerable';
import skipLastFn from '../skipLast';

export default function skipLast<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
    return this.lift<TSource>(skipLastFn.call(this, count));
}
