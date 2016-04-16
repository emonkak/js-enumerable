export default function* scan<TSource, TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): Iterable<TAccumulate> {
    let result = seed;
    for (const element of this as Iterable<TSource>) {
        result = func(result, element);
        yield result;
    }
}
