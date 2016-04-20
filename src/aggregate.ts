export default function aggregate<TSource, TAccumulate>(this: Iterable<TSource>, seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): TAccumulate {
    let result = seed;
    for (const element of this) {
        result = func(result, element);
    }
    return result;
}
