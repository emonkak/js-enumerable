import { isPartition } from './internal/partition';

export default function skip<TSource>(this: Iterable<TSource>, count: number): Iterable<TSource> {
    if (count <= 0) {
        return this;
    }
    if (isPartition(this)) {
        return (this as any).skip(count);
    }
    if (Array.isArray(this)) {
        return skipArray<TSource>(this as any, count);
    }
    return skipIterator<TSource>(this, count);
}

function* skipArray<TSource>(source: TSource[], count: number): Iterable<TSource> {
    const { length } = source;

    while (count < length) {
        yield source[count++];
    }
}

function* skipIterator<TSource>(source: Iterable<TSource>, count: number): Iterable<TSource> {
    for (const element of source) {
        if (count > 0) {
            count--;
        } else {
            yield element;
        }
    }
}
