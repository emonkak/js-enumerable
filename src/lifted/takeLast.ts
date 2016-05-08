import ILiftable from '../internal/ILiftable';
import takeLastFn from '../takeLast';

export default function takeLast<TSource>(this: ILiftable<TSource>, count: number): ILiftable<TSource> {
    return this.lift<TSource>(takeLastFn.call(this, count));
}
