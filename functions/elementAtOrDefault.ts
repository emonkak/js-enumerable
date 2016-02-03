import Partition from '../Partition'

export default function elementAtOrDefault<TSource>(index: number): TSource {
    if (this instanceof Partition) return this.elementAtOrDefault(index)
    if (Array.isArray(this)) {
        if (index < this.length) return this[index]
    } else {
        for (const element of this as Iterable<TSource>) {
            if (index === 0) return element
            index--
        }
    }
    return null
}
