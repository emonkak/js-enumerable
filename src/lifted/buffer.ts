import ILiftable from '../internal/ILiftable';
import bufferFn from '../buffer';

export default function buffer<TSource>(this: ILiftable<TSource>, count: number, skip?: number): ILiftable<TSource[]> {
    return this.lift<TSource[]>(bufferFn.call(this, count, skip));
}
