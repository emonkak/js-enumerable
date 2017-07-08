import skipWhileFn from '../skipWhile';
import { Enumerable } from '../internal/Enumerable';

export default function skipWhile<TSource>(predicate: (element: TSource) => boolean): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(skipWhileFn.call(source.source, predicate));
}
