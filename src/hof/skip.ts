import skipFn from '../skip';
import { Enumerable } from '../internal/Enumerable';

export default function skip<TSource>(count: number): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(skipFn.call(source.source, count));
}
