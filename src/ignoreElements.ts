import EmptyPartition from './internal/EmptyPartition';

export default function ignoreElements<TSource>(): Iterable<TSource> {
    return new EmptyPartition<TSource>();
}
