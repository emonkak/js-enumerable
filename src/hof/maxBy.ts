import maxByFn from '../maxBy';

export default function maxBy<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => maxByFn.call(source, keySelector);
}
