import ILiftable from '../internal/ILiftable';
import doWhileFn from '../doWhile';

export default function doWhile<TSource>(this: ILiftable<TSource>, condition: () => boolean): ILiftable<TSource> {
    return this.lift<TSource>(doWhileFn.call(this, condition));
}
