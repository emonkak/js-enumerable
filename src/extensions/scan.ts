import scanFn from '../scan';
import { Enumerable } from '../internal/Enumerable';

function scan<TSource, TAccumulate>(this: Enumerable<TSource>, seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): Enumerable<TAccumulate> {
    return this.lift<TAccumulate>(scanFn.call(this, seed, func));
}

Enumerable.prototype.scan = scan;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        scan<TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): Enumerable<TAccumulate>;
    }
}
