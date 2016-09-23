import IEnumerable from '../IEnumerable';
import onErrorResumeNextFn from '../onErrorResumeNext';

export default function onErrorResumeNext<TSource>(this: IEnumerable<TSource>, ...sources: Iterable<TSource>[]): IEnumerable<TSource> {
    return this.lift<TSource>(onErrorResumeNextFn.apply(this, sources));
}
