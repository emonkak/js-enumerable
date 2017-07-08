import onErrorResumeNextFn from '../onErrorResumeNext';
import { Enumerable } from '../internal/Enumerable';

export default function onErrorResumeNext<TSource>(second: Iterable<TSource>): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(onErrorResumeNextFn.call(source.source, second));
}
