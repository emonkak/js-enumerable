export default function minBy<TSource, TKey>(keySelector: (element: TSource) => TKey): TSource {
    let resultKey: TKey
    let resultElement: TSource

    for (const element of this as Iterable<TSource>) {
        const key = keySelector(element)
        if (resultKey == null || key < resultKey) {
            resultKey = key
            resultElement = element
        }
    }

    return resultElement
}
