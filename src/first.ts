import Partition from './internal/Partition';
import { noElements } from './internal/errors';

export default function first<TSource>(this: Iterable<TSource>, predicate?: (element: TSource) => boolean): TSource {
    if (predicate) {
        for (const element of this) {
            if (predicate(element)) return element;
        }
    } else {
        if (this instanceof Partition) return (this as any).first()
        if (Array.isArray(this)) {
            if ((this as any).length > 0) return (this as any)[0];
        } else {
            for (const element of this) {
                return element;
            }
        }
    }
    throw noElements();
}
