export default function* defaultIfEmpty<TSource>(defaultValue: TSource): Iterable<TSource> {
    let hasValue = false

    for (const element of this as Iterable<TSource>) {
        yield element
        hasValue = true
    }

    if (!hasValue) {
        yield defaultValue
    }
}
