import distinctUntilChangedFn from '../distinctUntilChanged';

export default function distinctUntilChanged<TSource>(): (source: Iterable<TSource>) => Iterable<TSource>;
export default function distinctUntilChanged<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Iterable<TSource>) => Iterable<TSource>;
export default function distinctUntilChanged<TSource, TKey>(keySelector?: (element: TSource) => TKey): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => distinctUntilChangedFn.call(source, keySelector);
}
