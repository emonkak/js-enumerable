import Partition from '../Partition'

export default function single<TSource>(predicate?: (element: TSource) => boolean): TSource {
    if (predicate) {
        let value: TSource
        let hasValue = false

        for (const element of this as Iterable<TSource>) {
            if (predicate(element)) {
                if (hasValue) throw new Error('More than one match found.')
                value = element
                hasValue = true
            }
        }

        if (hasValue) return value
    } else {
        if (Array.isArray(this)) {
            switch (this.length) {
            case 0:
                throw new Error('Sequence contains no elements.')
            case 1:
                return this[0]
            default:
                throw new Error('More than one match found.')
            }
        } else {
            let value: TSource
            let hasValue = false

            for (const element of this as Iterable<TSource>) {
                if (hasValue) throw new Error('More than one match found.')
                value = element
                hasValue = true
            }

            if (hasValue) return value
        }
    }
    throw new Error('Sequence contains no elements.')
}
