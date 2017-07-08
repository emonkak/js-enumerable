import lastFn from '../last';
import { Enumerable } from '../internal/Enumerable';

export default function last<TSource>(predicate?: (value: TSource) => boolean): (source: Enumerable<TSource>) => TSource {
    return (source) => lastFn.call(source, predicate);
}
