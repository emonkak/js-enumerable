import ILiftable from '../internal/ILiftable';
import skipFn from '../skip';

export default function skip<TSource>(this: ILiftable<TSource>, count: number): ILiftable<TSource> {
    return this.lift<TSource>(skipFn.call(this, count));
}
