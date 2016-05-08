import ILiftable from '../internal/ILiftable';
import repeatFn from '../repeat';

export default function repeat<TSource>(this: ILiftable<TSource>, count?: number): ILiftable<TSource> {
    return this.lift<TSource>(repeatFn.call(this, count));
}
