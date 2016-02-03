export default function* zip<TFirst, TSecond, TResult>(
    second: Iterable<TSecond>,
    resultSelector: (first: TFirst, second: TSecond) => TResult
): Iterable<TResult> {
    const iterator1 = (this as Iterable<TFirst>)[Symbol.iterator]()
    const iterator2 = second[Symbol.iterator]()

    while (true) {
        const result1 = iterator1.next()
        const result2 = iterator2.next()
        if (result1.done || result2.done) break
        yield resultSelector(result1.value, result2.value)
    }
}
