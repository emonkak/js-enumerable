import skipLastFn from '../skipLast';
import { Enumerable } from '../internal/Enumerable';

export default function skipLast<TSource>(count: number): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(skipLastFn.call(source.source, count));
}
