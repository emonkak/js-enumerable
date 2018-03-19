import skipLastFn from '../skipLast';

export default function skipLast<TSource>(count: number): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => skipLastFn.call(source, count);
}
