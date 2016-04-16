export default function toArray<TSource>(): TSource[] {
    return Array.from(this as Iterable<TSource>);
}
