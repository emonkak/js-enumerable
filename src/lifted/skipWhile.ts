import ILiftable from '../internal/ILiftable';
import skipWhileFn from '../skipWhile';

export default function skipWhile<TSource>(this: ILiftable<TSource>, predicate: (element: TSource) => boolean): ILiftable<TSource> {
    return this.lift<TSource>(skipWhileFn.call(this, predicate));
}
