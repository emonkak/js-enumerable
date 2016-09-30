import { Enumerable } from '../Enumerable';
import skipFn from '../skip';

export default function skip<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
    return this.lift<TSource>(skipFn.call(this, count));
}
