import Partition from '../Partition'

export default function elementAt<TSource>(index: number): TSource {
    if (this instanceof Partition) return this.elementAt(index)
    if (Array.isArray(this)) {
        if (index < this.length) return this[index]
    } else {
        for (const element of this as Iterable<TSource>) {
            if (index === 0) return element
            index--
        }
    }
    throw new Error('Sequence contains no elements.')
}
