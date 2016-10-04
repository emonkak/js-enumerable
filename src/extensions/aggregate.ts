import aggregate from '../aggregate';
import { Enumerable } from '../internal/Enumerable';

Enumerable.prototype.aggregate = aggregate;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        aggregate<TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): TAccumulate;
    }
}
