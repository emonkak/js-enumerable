import RepeatPartition from '../internal/RepeatPartition';

export default function repeat<TSource>(element: TSource, count?: number): Iterable<TSource> {
    return new RepeatPartition(element, count != null ? count : Infinity);
}
