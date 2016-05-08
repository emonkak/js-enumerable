import ILiftable from '../internal/ILiftable';
import onErrorResumeNextFn from '../onErrorResumeNext';

export default function onErrorResumeNext<TSource>(this: ILiftable<TSource>, ...sources: Iterable<TSource>[]): ILiftable<TSource> {
    return this.lift<TSource>(onErrorResumeNextFn.apply(this, sources));
}
