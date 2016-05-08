import ILiftable from '../internal/ILiftable';
import retryFn from '../retry';

export default function retry<TSource>(this: ILiftable<TSource>, retryCount?: number): ILiftable<TSource> {
    return this.lift<TSource>(retryFn.call(this, retryCount));
}
