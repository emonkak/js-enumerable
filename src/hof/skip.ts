import skipFn from '../skip';

export default function skip<TSource>(count: number): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => skipFn.call(source, count);
}
