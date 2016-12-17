import Partition from './internal/Partition';

export default function lastOrDefault<TSource>(this: Iterable<TSource>): TSource | null;
export default function lastOrDefault<TSource>(this: Iterable<TSource>, predicate: (value: TSource) => boolean): TSource | null;
export default function lastOrDefault<TSource>(this: Iterable<TSource>, predicate: ((value: TSource) => boolean) | null, defaultValue: TSource): TSource;
export default function lastOrDefault<TSource>(this: Iterable<TSource>, predicate?: ((value: TSource) => boolean) | null, defaultValue: TSource | null = null): TSource | null {
    if (predicate) {
        let value: TSource | undefined;
        let hasValue = false;

        for (const element of this) {
            if (predicate(element)) {
                value = element;
                hasValue = true;
            }
        }

        if (hasValue) {
            return value as TSource;
        }
    } else {
        if (this instanceof Partition) {
            return (this as any).lastOrDefault(defaultValue);
        }
        if (Array.isArray(this)) {
            if ((this as any).length > 0) {
                return (this as any)[(this as any).length - 1];
            }
        } else {
            let value: TSource | undefined;
            let hasValue = false;

            for (const element of this) {
                value = element;
                hasValue = true;
            }

            if (hasValue) {
                return value as TSource;
            }
        }
    }
    return defaultValue;
}
