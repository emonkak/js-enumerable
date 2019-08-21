import distinctFn from '../distinct';

export default function distinct<TSource>(): (source: Iterable<TSource>) => Iterable<TSource>;
export default function distinct<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Iterable<TSource>) => Iterable<TSource>;
export default function distinct<TSource, TKey>(keySelector?: (element: TSource) => TKey): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => distinctFn.call(source, keySelector);
}
