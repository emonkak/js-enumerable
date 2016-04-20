export default function* reverse<TSource>(this: Iterable<TSource>): Iterable<TSource> {
    const array = Array.isArray(this) ? this as any : Array.from(this);
    for (let i = array.length - 1; i >= 0; i--) {
        yield array[i];
    }
}
