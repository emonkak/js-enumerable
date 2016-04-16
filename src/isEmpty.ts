export default function isEmpty<TSource>(): boolean {
    const iterator = this[Symbol.iterator]();
    return iterator.next().done;
}
