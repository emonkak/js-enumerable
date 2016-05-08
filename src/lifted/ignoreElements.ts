import ILiftable from '../internal/ILiftable';
import ignoreElementsFn from '../ignoreElements';

export default function ignoreElements<TSource>(this: ILiftable<TSource>): ILiftable<TSource> {
    return this.lift<TSource>(ignoreElementsFn.call(this));
}
