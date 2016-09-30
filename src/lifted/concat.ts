import { Enumerable } from '../Enumerable';
import concatFn from '../concat';

export default function concat<TSource>(this: Enumerable<TSource>, ...sources: Iterable<TSource>[]): Enumerable<TSource> {
    return this.lift<TSource>(concatFn.apply(this, sources));
}
