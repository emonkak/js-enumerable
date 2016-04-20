export default function* _do<TSource>(this: Iterable<TSource>, action: (element: TSource) => void): Iterable<TSource> {
    for (const element of this) {
        action(element);
        yield element;
    }
}

