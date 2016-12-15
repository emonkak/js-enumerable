import Partition from './internal/Partition';

export default function elementAtOrDefault<TSource>(this: Iterable<TSource>, index: number, defaultValue: TSource = null): TSource {
    if (this instanceof Partition) {
        return (this as any).elementAtOrDefault(index, defaultValue);
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
    return defaultValue;
}
