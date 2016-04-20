import EmptyPartition from './internal/EmptyPartition';

export default function ignoreElements<TSource>(this: Iterable<TSource>): Iterable<TSource> {
    return new EmptyPartition<TSource>();
}
