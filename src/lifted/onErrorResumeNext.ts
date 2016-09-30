import { Enumerable } from '../Enumerable';
import onErrorResumeNextFn from '../onErrorResumeNext';

export default function onErrorResumeNext<TSource>(this: Enumerable<TSource>, ...sources: Iterable<TSource>[]): Enumerable<TSource> {
    return this.lift<TSource>(onErrorResumeNextFn.apply(this, sources));
}
