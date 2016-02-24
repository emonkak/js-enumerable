export default function maxBy<TSource, TKey>(keySelector: (element: TSource) => TKey): TSource[] {
    const iterator = this[Symbol.iterator]() as Iterator<TSource>

    let result: TSource[] = []
    let iteratorResult = iterator.next()

    if (!iteratorResult.done) {
        let resultKey = keySelector(iteratorResult.value)

        result.push(iteratorResult.value)

        while (!(iteratorResult = iterator.next()).done) {
            const key = keySelector(iteratorResult.value)
            if (key == resultKey) {
                result.push(iteratorResult.value)
            } else if (key > resultKey) {
                resultKey = key
                result = [iteratorResult.value]
            }
        }
    }

    return result
}
