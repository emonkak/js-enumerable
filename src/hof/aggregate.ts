import aggregateFn from '../aggregate';
import { Enumerable } from '../internal/Enumerable';

export default function aggregate<TSource, TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): (source: Enumerable<TSource>) => TAccumulate {
    return (source) => aggregateFn.call(source, seed, func);
}
