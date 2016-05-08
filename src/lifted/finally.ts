import ILiftable from '../internal/ILiftable';
import finallyFn from '../finally';

export default function _finally<TSource>(this: ILiftable<TSource>, finallyAction: () => void): ILiftable<TSource> {
    return this.lift<TSource>(finallyFn.call(this, finallyAction));
}
