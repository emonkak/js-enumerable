import Partition from '../Partition'

export default function firstOrDefault<TSource>(predicate?: (element: TSource) => boolean): TSource {
    if (predicate) {
        for (const element of this as Iterable<TSource>) {
            if (predicate(element)) return element
        }
    } else {
        if (this instanceof Partition) return this.firstOrDefault()
        if (Array.isArray(this)) {
            if (this.length > 0) return this[0]
        } else {
            for (const element of this as Iterable<TSource>) {
                return element
            }
        }
    }
    return null
}
