import ILiftable from '../internal/ILiftable';
import memoizeFn from '../memoize';

export default function memoize<TSource>(this: ILiftable<TSource>): ILiftable<TSource> {
    return this.lift<TSource>(memoizeFn.call(this));
}
