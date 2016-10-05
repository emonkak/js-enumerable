import aggregateFn from '../aggregate';
import { Enumerable } from '../internal/Enumerable';

export default function aggregate<TSource, TAccumulate>(this: Enumerable<TSource>, seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): TAccumulate {
    return aggregateFn.call(this.source, seed, func);
}

Enumerable.prototype.aggregate = aggregate;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        aggregate<TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): TAccumulate;
    }
}
