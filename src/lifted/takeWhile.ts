import ILiftable from '../internal/ILiftable';
import takeWhileFn from '../takeWhile';

export default function takeWhile<TSource>(this: ILiftable<TSource>, predicate: (element: TSource) => boolean): ILiftable<TSource> {
    return this.lift<TSource>(takeWhileFn.call(this, predicate));
}
