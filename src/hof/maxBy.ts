import maxByFn from '../maxBy';
import { Enumerable } from '../internal/Enumerable';

export default function maxBy<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(maxByFn.call(source.source, keySelector));
}
