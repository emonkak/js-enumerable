export default function* reverse<TSource>(): Iterable<TSource> {
    const array = Array.isArray(this) ? this : Array.from(this);
    for (let i = array.length - 1; i >= 0; i--) {
        yield array[i];
    }
}
