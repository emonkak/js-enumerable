import Partition from './internal/Partition';
import { noElements } from './internal/errors';

export default function last<TSource>(this: Iterable<TSource>, predicate?: (value: TSource) => boolean): TSource {
    if (predicate) {
        let value: TSource;
        let hasValue = false;

        for (const element of this) {
            if (predicate(element)) {
                value = element;
                hasValue = true;
            }
        }

        if (hasValue) return value;
    } else {
        if (this instanceof Partition) return (this as any).last();
        if (Array.isArray(this)) {
            if ((this as any).length > 0) return (this as any)[(this as any).length - 1];
        } else {
            let value: TSource;
            let hasValue = false;

            for (const element of this) {
                value = element;
                hasValue = true;
            }

            if (hasValue) return value;
        }
    }
    throw noElements();
}
