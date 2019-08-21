import minByFn from '../minBy';

export default function minBy<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => minByFn.call(source, keySelector);
}
