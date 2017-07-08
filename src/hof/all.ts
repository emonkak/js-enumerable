import allFn from '../all';
import { Enumerable } from '../internal/Enumerable';

export default function all<TSource>(predicate?: (element: TSource) => boolean): (source: Enumerable<TSource>) => boolean {
    return (source) => allFn.call(source, predicate);
}
