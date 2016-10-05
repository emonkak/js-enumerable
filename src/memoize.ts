export default function memoize<TSource>(this: Iterable<TSource>): Iterable<TSource> {
    let buffer: TSource[] = [];
    let iterator = this[Symbol.iterator]();

    return {
        *[Symbol.iterator]() {
            yield* buffer;

            if (iterator != null) {
                while (true) {
                    let result: IteratorResult<TSource>;
                    try {
                        result = iterator.next();
                    } catch (e) {
                        iterator = null;
                        throw e;
                    }
                    if (result.done) {
                        iterator = null;
                        break;
                    }
                    buffer.push(result.value);
                    yield result.value;
                }
            }
        }
    }
}
