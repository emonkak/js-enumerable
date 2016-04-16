export default function* _do<TSource>(action: (element: TSource) => void): Iterable<TSource> {
    for (const element of this as Iterable<TSource>) {
        action(element);
        yield element;
    }
}

