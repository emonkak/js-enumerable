export default function singleOrDefault<TSource>(this: Iterable<TSource>): TSource | null;
export default function singleOrDefault<TSource>(this: Iterable<TSource>, predicate: (element: TSource) => boolean): TSource | null;
export default function singleOrDefault<TSource>(this: Iterable<TSource>, predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): TSource;
export default function singleOrDefault<TSource>(this: Iterable<TSource>, predicate?: ((element: TSource) => boolean) | null, defaultValue: TSource | null = null): TSource | null {
    if (predicate) {
        let value: TSource | undefined;
        let hasValue = false;

        for (const element of this) {
            if (predicate(element)) {
                if (hasValue) {
                    return defaultValue;
                }
                value = element;
                hasValue = true;
            }
        }

        if (hasValue) {
            return value as TSource;
        }
    } else {
        if (Array.isArray(this)) {
            switch ((this as any).length) {
            case 1:
                return (this as any)[0];
            default:
                return defaultValue;
            }
        } else {
            let value: TSource | undefined;
            let hasValue = false;

            for (const element of this) {
                if (hasValue) {
                    return defaultValue;
                }
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
