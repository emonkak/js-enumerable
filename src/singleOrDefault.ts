import Partition from './internal/Partition';

export default function singleOrDefault<TSource>(predicate?: (element: TSource) => boolean, defaultValue: TSource = null): TSource {
    if (predicate) {
        let value: TSource;
        let hasValue = false;

        for (const element of this as Iterable<TSource>) {
            if (predicate(element)) {
                if (hasValue) return defaultValue;
                value = element;
                hasValue = true;
            }
        }

        if (hasValue) return value;
    } else {
        if (Array.isArray(this)) {
            switch (this.length) {
            case 1:
                return this[0];
            default:
                return defaultValue;
            }
        } else {
            let value: TSource;
            let hasValue = false;

            for (const element of this as Iterable<TSource>) {
                if (hasValue) return defaultValue;
                value = element;
                hasValue = true;
            }

            if (hasValue) return value;
        }
    }
    return defaultValue;
}
