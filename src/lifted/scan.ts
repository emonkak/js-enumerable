import IEnumerable from '../IEnumerable';
import scanFn from '../scan';

export default function scan<TSource, TAccumulate>(this: IEnumerable<TSource>, seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): IEnumerable<TAccumulate> {
    return this.lift<TAccumulate>(scanFn.call(this, seed, func));
}
