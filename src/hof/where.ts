import whereFn from '../where';
import { Enumerable } from '../internal/Enumerable';

export default function where<TSource>(predicate: (item: TSource) => boolean): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(whereFn.call(source.source, predicate));
}
