import scanFn from '../scan';

export default function scan<TSource, TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): (source: Iterable<TSource>) => Iterable<TAccumulate> {
    return (source) => scanFn.call(source, seed, func);
}
