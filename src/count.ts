export default function count<TSource>(this: Iterable<TSource>, predicate?: (item: TSource) => boolean): number {
    if (predicate) {
        let count = 0;
        for (const element of this) {
            if (predicate(element)) count++;
        }
        return count;
    } else {
        if (Array.isArray(this)) return (this as Array<TSource>).length;
        const iterator = this[Symbol.iterator]();
        let count = 0;
        for (let result = iterator.next(); !result.done; result = iterator.next()) {
            count++;
        }
        return count;
    }
}
