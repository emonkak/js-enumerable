import { isPartition } from './internal/partition';

export default function firstOrDefault<TSource>(this: Iterable<TSource>): TSource | null;
export default function firstOrDefault<TSource>(this: Iterable<TSource>, predicate: (element: TSource) => boolean): TSource | null;
export default function firstOrDefault<TSource>(this: Iterable<TSource>, predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): TSource;
export default function firstOrDefault<TSource>(this: Iterable<TSource>, predicate?: ((element: TSource) => boolean) | null, defaultValue: TSource | null = null): TSource | null {
    if (predicate) {
        for (const element of this) {
            if (predicate(element)) {
                return element;
            }
        }
    } else {
        if (isPartition(this)) {
            return (this as any).firstOrDefault(null, defaultValue);
        }
        if (Array.isArray(this)) {
            if ((this as any).length > 0) {
                return (this as any)[0];
            }
        } else {
            for (const element of this) {
                return element;
            }
        }
    }
    return defaultValue;
}
