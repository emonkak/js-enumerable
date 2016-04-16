export default function takeLast<TSource>(count: number): Iterable<TSource> {
    const q: TSource[] = [];

    for (const element of this as Iterable<TSource>) {
        if (q.push(element) > count) {
            q.shift();
        }
    }

    return q;
}
