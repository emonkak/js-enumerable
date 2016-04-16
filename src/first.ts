import Partition from './internal/Partition';
import { noElements } from './internal/errors';

export default function first<TSource>(predicate?: (element: TSource) => boolean): TSource {
    if (predicate) {
        for (const element of this as Iterable<TSource>) {
            if (predicate(element)) return element;
        }
    } else {
        if (this instanceof Partition) return this.first()
        if (Array.isArray(this)) {
            if (this.length > 0) return this[0];
        } else {
            for (const element of this as Iterable<TSource>) {
                return element;
            }
        }
    }
    throw noElements();
}
