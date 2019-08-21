import repeatFn from '../repeat';

export default function repeat<TSource>(count?: number): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => repeatFn.call(source, count);
}
