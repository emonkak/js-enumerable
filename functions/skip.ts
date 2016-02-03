import Partition from '../Partition'
import EmptyPartition from '../EmptyPartition'

export default function skip<TSource>(count: number): Iterable<TSource> {
    if (count <= 0) return new EmptyPartition<TSource>()
    if (this instanceof Partition) return this.skip(count)
    if (Array.isArray(this)) return skipArray<TSource>(this, count)
    return skipIterator<TSource>(this, count)
}

function* skipArray<TSource>(source: TSource[], count: number): Iterable<TSource> {
    const { length } = source

    while (count < length) {
        yield source[count++]
    }
}

function* skipIterator<TSource>(source: Iterable<TSource>, count: number): Iterable<TSource> {
    for (const element of source) {
        if (count > 0) {
            count--
        } else {
            yield element
        }
    }
}
