export default function aggregate<TSource, TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): TAccumulate {
    let result = seed
    for (const element of this as Iterable<TSource>) {
        result = func(result, element)
    }
    return result
}
