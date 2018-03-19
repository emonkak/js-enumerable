import aggregateFn from '../aggregate';

export default function aggregate<TSource, TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): (source: Iterable<TSource>) => TAccumulate {
    return (source) => aggregateFn.call(source, seed, func);
}
