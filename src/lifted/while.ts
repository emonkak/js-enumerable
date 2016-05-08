import ILiftable from '../internal/ILiftable';
import whileFn from '../while';

export default function _while<TSource>(this: ILiftable<TSource>, condition: () => boolean): ILiftable<TSource> {
    return this.lift<TSource>(whileFn.call(this, condition));
}
