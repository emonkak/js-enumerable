export default function forEach<TSource>(this: Iterable<TSource>, action: (element: TSource) => void): void {
    for (const element of this) {
        action(element);
    }
}
