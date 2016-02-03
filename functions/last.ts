import Partition from '../Partition'

export default function last<TSource>(predicate?: (value: TSource) => boolean): TSource {
    if (predicate) {
        let value: TSource
        let hasValue = false

        for (const element of this as Iterable<TSource>) {
            if (predicate(value)) {
                value = element
                hasValue = true
            }
        }

        if (hasValue) return value
    } else {
        if (this instanceof Partition) return this.last()
        if (Array.isArray(this)) {
            if (this.length > 0) return this[this.length - 1]
        } else {
            let value: TSource
            let hasValue = false

            for (const element of this as Iterable<TSource>) {
                value = element
                hasValue = true
            }

            if (hasValue) return value
        }
    }
    throw new Error('Sequence contains no elements.')
}
