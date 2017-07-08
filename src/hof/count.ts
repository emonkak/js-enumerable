import countFn from '../count';
import { Enumerable } from '../internal/Enumerable';

export default function count<TSource>(predicate?: (item: TSource) => boolean): (source: Enumerable<TSource>) => number {
    return (source) => countFn.call(source, predicate);
}
