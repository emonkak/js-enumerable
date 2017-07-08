import firstFn from '../first';
import { Enumerable } from '../internal/Enumerable';

export default function first<TSource>(predicate?: (element: TSource) => boolean): (source: Enumerable<TSource>) => TSource {
    return (source) => firstFn.call(source, predicate);
}
