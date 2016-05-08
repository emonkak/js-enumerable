import ILiftable from '../internal/ILiftable';
import scanFn from '../scan';

export default function scan<TSource, TAccumulate>(this: ILiftable<TSource>, seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): ILiftable<TAccumulate> {
    return this.lift<TAccumulate>(scanFn.call(this, seed, func));
}
