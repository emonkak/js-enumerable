import anyFn from '../any';
import { Enumerable } from '../internal/Enumerable';

export default function any<TSource>(predicate?: (element: TSource) => boolean): (source: Enumerable<TSource>) => boolean {
    return (source) => anyFn.call(source, predicate);
}
