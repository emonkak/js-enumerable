export default function* skipLast<TSource>(this: Iterable<TSource>, count: number): Iterable<TSource> {
    const q: TSource[] = [];

    for (const element of this) {
        if (q.push(element) > count) {
            yield q.shift() as TSource;
        }
    }
}
