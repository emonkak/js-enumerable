import { isPartition } from './internal/partition';
import { noElements } from './internal/errors';

export default function elementAt<TSource>(this: Iterable<TSource>, index: number): TSource {
    if (isPartition(this)) {
        return (this as any).elementAt(index);
    }
    if (Array.isArray(this)) {
        if (index < (this as any).length) {
            return (this as any)[index];
        }
    } else {
        for (const element of this) {
            if (index === 0) {
                return element;
            }
            index--;
        }
    }
    throw noElements();
}
