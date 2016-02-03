import Partition from '../Partition'

export default function singleOrDefault<TSource>(predicate?: (element: TSource) => boolean): TSource {
    if (predicate) {
        let value: TSource
        let hasValue = false

        for (const element of this as Iterable<TSource>) {
            if (predicate(element)) {
                if (hasValue) return null
                value = element
                hasValue = true
            }
        }

        if (hasValue) return value
    } else {
        if (Array.isArray(this)) {
            switch (this.length) {
            case 1:
                return this[0]
            default:
                return null
            }
        } else {
            let value: TSource
            let hasValue = false

            for (const element of this as Iterable<TSource>) {
                if (hasValue) return null
                value = element
                hasValue = true
            }

            if (hasValue) return value
        }
    }
    return null
}
