import bufferFn from '../buffer';
import { Enumerable } from '../internal/Enumerable';

export default function buffer<TSource>(count: number, skip?: number): (source: Enumerable<TSource>) => Enumerable<TSource[]> {
    return (source) => source.lift<TSource[]>(bufferFn.call(source.source, count, skip));
}
