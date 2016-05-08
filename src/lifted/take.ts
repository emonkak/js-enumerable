import ILiftable from '../internal/ILiftable';
import takeFn from '../take';

export default function take<TSource>(this: ILiftable<TSource>, count: number): ILiftable<TSource> {
    return this.lift<TSource>(takeFn.call(this, count));
}
