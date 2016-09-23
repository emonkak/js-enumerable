import IEnumerable from '../IEnumerable';
import concatFn from '../concat';

export default function concat<TSource>(this: IEnumerable<TSource>, ...sources: Iterable<TSource>[]): IEnumerable<TSource> {
    return this.lift<TSource>(concatFn.apply(this, sources));
}
