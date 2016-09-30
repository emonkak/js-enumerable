import { Enumerable } from '../Enumerable';
import bufferFn from '../buffer';

export default function buffer<TSource>(this: Enumerable<TSource>, count: number, skip?: number): Enumerable<TSource[]> {
    return this.lift<TSource[]>(bufferFn.call(this, count, skip));
}
