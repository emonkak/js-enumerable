import ILiftable from '../internal/ILiftable';
import whereFn from '../where';

export default function where<TSource>(this: ILiftable<TSource>, predicate: (item: TSource) => boolean): ILiftable<TSource> {
    return this.lift<TSource>(whereFn.call(this, predicate));
}
