import ILiftable from '../internal/ILiftable';
import exceptFn from '../except';

export default function except<TSource>(this: ILiftable<TSource>, second: Iterable<TSource>): ILiftable<TSource> {
    return this.lift<TSource>(exceptFn.call(this, second));
}
