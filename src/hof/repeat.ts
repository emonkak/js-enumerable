import repeatFn from '../repeat';
import { Enumerable } from '../internal/Enumerable';

export default function repeat<TSource>(count?: number): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(repeatFn.call(source.source, count));
}
