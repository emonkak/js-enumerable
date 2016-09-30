import { Enumerable } from '../Enumerable';
import scanFn from '../scan';

export default function scan<TSource, TAccumulate>(this: Enumerable<TSource>, seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): Enumerable<TAccumulate> {
    return this.lift<TAccumulate>(scanFn.call(this, seed, func));
}
