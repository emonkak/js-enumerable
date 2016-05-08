import ILiftable from '../internal/ILiftable';
import concatFn from '../concat';

export default function concat<TSource>(this: ILiftable<TSource>, ...sources: Iterable<TSource>[]): ILiftable<TSource> {
    return this.lift<TSource>(concatFn.apply(this, sources));
}
