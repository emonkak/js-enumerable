import ILiftable from '../internal/ILiftable';
import intersectFn from '../intersect';

export default function intersect<TSource>(this: ILiftable<TSource>, second: Iterable<TSource>): ILiftable<TSource> {
    return this.lift<TSource>(intersectFn.call(this, second));
}
