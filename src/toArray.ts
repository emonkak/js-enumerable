export default function toArray<TSource>(this: Iterable<TSource>): TSource[] {
    return Array.from(this);
}
