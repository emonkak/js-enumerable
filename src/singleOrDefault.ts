export default function singleOrDefault<TSource>(this: Iterable<TSource>, predicate?: (element: TSource) => boolean, defaultValue: TSource = null): TSource {
    if (predicate) {
        let value: TSource;
        let hasValue = false;

        for (const element of this) {
            if (predicate(element)) {
                if (hasValue) return defaultValue;
                value = element;
                hasValue = true;
            }
        }

        if (hasValue) return value;
    } else {
        if (Array.isArray(this)) {
            switch ((this as any).length) {
            case 1:
                return (this as any)[0];
            default:
                return defaultValue;
            }
        } else {
            let value: TSource;
            let hasValue = false;

            for (const element of this) {
                if (hasValue) return defaultValue;
                value = element;
                hasValue = true;
            }

            if (hasValue) return value;
        }
    }
    return defaultValue;
}
