import { Enumerable } from '../Enumerable';
import takeLastFn from '../takeLast';

export default function takeLast<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
    return this.lift<TSource>(takeLastFn.call(this, count));
}
