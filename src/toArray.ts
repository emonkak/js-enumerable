export default function toArray<TSource>(this: Iterable<TSource>): TSource[] {
    return Array.isArray(this) ? this as TSource[] : Array.from(this);
}
