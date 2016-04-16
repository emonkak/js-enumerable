import Partition from './internal/Partition';

export default function elementAtOrDefault<TSource>(index: number, defaultValue: TSource = null): TSource {
    if (this instanceof Partition) return this.elementAtOrDefault(index, defaultValue);
    if (Array.isArray(this)) {
        if (index < this.length) return this[index];
    } else {
        for (const element of this as Iterable<TSource>) {
            if (index === 0) return element;
            index--;
        }
    }
    return defaultValue;
}
