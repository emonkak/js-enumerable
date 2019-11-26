export default function isEmpty<TSource>(this: Iterable<TSource>): boolean {
    const iterator = this[Symbol.iterator]();
    return !!iterator.next().done;
}
