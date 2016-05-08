import ILiftable from '../internal/ILiftable';
import unionFn from '../union';

export default function union<TSource>(this: ILiftable<TSource>, second: Iterable<TSource>): ILiftable<TSource> {
    return this.lift<TSource>(unionFn.call(this, second));
}
