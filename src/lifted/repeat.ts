import { Enumerable } from '../Enumerable';
import repeatFn from '../repeat';

export default function repeat<TSource>(this: Enumerable<TSource>, count?: number): Enumerable<TSource> {
    return this.lift<TSource>(repeatFn.call(this, count));
}
