import { Enumerable } from '../Enumerable';
import retryFn from '../retry';

export default function retry<TSource>(this: Enumerable<TSource>, retryCount?: number): Enumerable<TSource> {
    return this.lift<TSource>(retryFn.call(this, retryCount));
}
