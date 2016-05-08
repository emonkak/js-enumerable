import ILiftable from '../internal/ILiftable';
import reverseFn from '../reverse';

export default function reverse<TSource>(this: ILiftable<TSource>): ILiftable<TSource> {
    return this.lift<TSource>(reverseFn.call(this));
}
