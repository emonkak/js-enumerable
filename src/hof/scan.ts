import scanFn from '../scan';
import { Enumerable } from '../internal/Enumerable';

export default function scan<TSource, TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): (source: Enumerable<TSource>) => Enumerable<TAccumulate> {
    return (source) => source.lift<TAccumulate>(scanFn.call(source.source, seed, func));
}
