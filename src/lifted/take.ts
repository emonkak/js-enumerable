import { Enumerable } from '../Enumerable';
import takeFn from '../take';

export default function take<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
    return this.lift<TSource>(takeFn.call(this, count));
}
