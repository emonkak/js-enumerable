import takeLastFn from '../takeLast';

export default function takeLast<TSource>(count: number): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => takeLastFn.call(source, count);
}
