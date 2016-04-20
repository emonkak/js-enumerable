export default function takeLast<TSource>(this: Iterable<TSource>, count: number): Iterable<TSource> {
    const q: TSource[] = [];

    for (const element of this) {
        if (q.push(element) > count) {
            q.shift();
        }
    }

    return q;
}
