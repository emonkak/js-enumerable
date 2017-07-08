import concatFn from '../concat';
import { Enumerable } from '../internal/Enumerable';

export default function concat<TSource>(second: Iterable<TSource>): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(concatFn.call(source.source, second));
}
