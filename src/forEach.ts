export default function forEach<TSource>(action: (element: TSource) => void): void {
    for (const element of this as Iterable<TSource>) {
        action(element)
    }
}
