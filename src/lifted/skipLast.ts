import ILiftable from '../internal/ILiftable';
import skipLastFn from '../skipLast';

export default function skipLast<TSource>(this: ILiftable<TSource>, count: number): ILiftable<TSource> {
    return this.lift<TSource>(skipLastFn.call(this, count));
}
