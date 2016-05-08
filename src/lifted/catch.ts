import ILiftable from '../internal/ILiftable';
import catchFn from '../catch';

export default function _catch<TSource, TException>(this: ILiftable<TSource>, handler: (exception: TException) => Iterable<TSource>): ILiftable<TSource> {
    return this.lift<TSource>(catchFn.call(this, handler));
}
