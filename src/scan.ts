export default function* scan<TSource, TAccumulate>(this: Iterable<TSource>, seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): Iterable<TAccumulate> {
    let result = seed;
    for (const element of this) {
        result = func(result, element);
        yield result;
    }
}
