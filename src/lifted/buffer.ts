import IEnumerable from '../IEnumerable';
import bufferFn from '../buffer';

export default function buffer<TSource>(this: IEnumerable<TSource>, count: number, skip?: number): IEnumerable<TSource[]> {
    return this.lift<TSource[]>(bufferFn.call(this, count, skip));
}
