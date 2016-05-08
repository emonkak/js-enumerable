import ILiftable from '../internal/ILiftable';
import defaultIfEmptyFn from '../defaultIfEmpty';

export default function defaultIfEmpty<TSource>(this: ILiftable<TSource>, defaultValue: TSource): ILiftable<TSource> {
    return this.lift<TSource>(defaultIfEmptyFn.call(this, defaultValue));
}
