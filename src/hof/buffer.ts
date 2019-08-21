import bufferFn from '../buffer';

export default function buffer<TSource>(count: number, skip?: number): (source: Iterable<TSource>) => Iterable<TSource[]> {
    return (source) => bufferFn.call(source, count, skip);
}
