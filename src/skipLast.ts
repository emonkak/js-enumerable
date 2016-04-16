export default function* skipLast<TSource>(count: number): Iterable<TSource> {
    const q: TSource[] = [];

    for (const element of this as Iterable<TSource>) {
        if (q.push(element) > count) {
            yield q.shift();
        }
    }
}
