import Partition from './internal/Partition';
import EmptyPartition from './internal/EmptyPartition';

export default function take<TSource>(this: Iterable<TSource>, count: number): Iterable<TSource> {
    if (count <= 0) {
        return new EmptyPartition<TSource>();
    }
    if (this instanceof Partition) {
        return (this as any).take(count);
    }
    return takeIterator<TSource>(this as any, count);
}

function *takeIterator<TSource>(source: Iterable<TSource>, count: number): Iterable<TSource> {
    for (const element of source) {
        yield element;
        if (--count <= 0) {
            break;
        }
    }
}
