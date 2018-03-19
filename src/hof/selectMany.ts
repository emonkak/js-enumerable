import selectManyFn from '../selectMany';

export default function selectMany<TSource, TResult>(collectionSelector: (element: TSource) => Iterable<TResult>): (source: Iterable<TSource>) => Iterable<TResult> {
    return (source) => selectManyFn.call(source, collectionSelector);
}
