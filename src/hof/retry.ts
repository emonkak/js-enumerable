import retryFn from '../retry';

export default function retry<TSource>(retryCount?: number): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => retryFn.call(source, retryCount);
}
