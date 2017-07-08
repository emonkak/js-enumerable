import singleFn from '../single';
import { Enumerable } from '../internal/Enumerable';

export default function single<TSource>(predicate?: (element: TSource) => boolean): (source: Enumerable<TSource>) => TSource {
    return (source) => singleFn.call(source, predicate);
}
