export default function* defaultIfEmpty<TSource>(this: Iterable<TSource>, defaultValue: TSource): Iterable<TSource> {
    let hasValue = false;

    for (const element of this) {
        yield element;
        hasValue = true;
    }

    if (!hasValue) yield defaultValue;
}
