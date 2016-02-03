export default function toList<TSource>(): TSource[] {
    return Array.isArray(this) ? this : Array.from(this)
}
